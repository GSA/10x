const path = require("path");
const fs = require("fs-extra");
const markdown = require("remark");
const slug = require("remark-slug");
const parse = require("remark-parse");
const slugLink = require("remark-autolink-headings");
const extractToc = require("remark-extract-toc");
const YAML = require("yaml");

const excludedPathTypes = ["page"];

const CMS_KEY = "cms";
const DEST_KEY = "public";

const CMS_PATH = path.join(__dirname, CMS_KEY);
const DEST_PATH = path.join(__dirname, DEST_KEY);

const parseHeading = (item, data = []) => {
  data.push({ text: item.value, url: `#${item.data.id}` });
};

const parseToc = (items, data) => {
  items.forEach((item) => {
    parseHeading(item, data);
    if (item.children) {
      parseToc(item.children, data);
    }
  });
};

const excerpt = () => (tree = [], vfile) => {
  let excerpt = tree.children.find((item) => item.type === "paragraph");
  if (excerpt) {
    vfile.data.excerpt = excerpt.children[0].value;
  }
  return tree;
};

// Set up Remark instances
const remark = markdown().use(parse).use(slug).use(slugLink).use(excerpt);

// Separate Remark because extractToc doesn't play nice.
const remarkToc = markdown()
  .use(parse)
  .use(slug)
  .use(slugLink)
  .use(extractToc, { keys: ["data"] });

/**
 * Gets the config file
 *
 */
const getConfig = () =>
  YAML.parse(
    fs.readFileSync(path.join(DEST_PATH, "/admin/config.yml"), "utf-8")
  );

/**
 * For a given filename, append the data and resave the file, the return the appended data
 *
 * @param {*} filename
 * @param {*} filePath
 * @param {*} collection
 * @return {*} the file data object with the appended fields
 */
const addContentMetaData = (filename, filePath, collection) => {
  const fileData = fs.readJsonSync(path.join(filePath, filename));
  fileData.type = collection.name;
  fileData.name = filename.replace(/\.json/, "");
  fileData.path = `/${
    excludedPathTypes.includes(fileData.type)
      ? fileData.name
      : `${fileData.type}/`
  }${fileData.name}`;

  const process = remark.processSync(fileData.body);
  if (!fileData.excerpt) {
    fileData.excerpt = process.data.excerpt;
  }
  fileData.body = process.toString();

  const node = remarkToc.parse(fileData.body);
  const headings = remarkToc.runSync(node);
  const toc = [];
  parseToc(headings, toc);
  fileData.toc = toc;
  return fileData;
};

/**
 * Extracts taxonomy data for a file dataset
 * @param {Array} fields  Array of meta fields that can be taxonomied
 */
const extractTaxonomyData = (field) => {
  const { key, title, value } = field;
  return { key, title, items: [value] };
};

/**
 * Indexes Taxonomy data for a given contentIndex
 * to be run as a reduce function
 * @param {Array} index
 * @param {Object} fileData
 */
const indexTaxonomies = (index, fileData) => {
  let newData = [...index];
  // does the property 'field' exist in fileData?
  if ("fields" in fileData) {
    fileData.fields.forEach((field) => {
      const fieldData = extractTaxonomyData(field);
      // check if key already exists in acc for the current item
      const exists = newData.find((n) => n.key === fieldData.key);

      // If the key doesn't exist in the index, add it
      if (!Boolean(exists)) {
        newData.push(fieldData);
        return;
      }
      // If a key was found and does not include the current value, add it
      if (!exists.items.includes(fieldData.items[0])) {
        exists.items.push(fieldData.items[0]);
        newData = newData.filter((item) => item.key !== fieldData.key);
        newData.push(exists);
      }
    });
  }
  return newData;
};

/**
 * Indexes all content directories
 *
 */
const indexContent = () => {
  const config = getConfig();
  const collections = config.collections.filter((col) =>
    col.folder.includes("content")
  );
  // iterate over the specified Content types
  collections.forEach((collection) => {
    const folder = collection.folder.replace(`${CMS_KEY}/`, "");
    const collectionPath = path.join(DEST_PATH, folder);
    fs.ensureDirSync(collectionPath);
    const contents = fs
      .readdirSync(collectionPath)
      .filter(
        (filename) => filename !== "index.json" && filename.includes(".json")
      );
    const contentIndex = contents.map((filename) => {
      const data = addContentMetaData(filename, collectionPath, collection);
      fs.outputJSONSync(path.join(collectionPath, filename), data);
      return data;
    });
    console.log(collectionPath);
    const taxonomyIndex = contentIndex.reduce(indexTaxonomies, []);

    fs.outputJSONSync(path.join(collectionPath, "index.json"), contentIndex);
    if (taxonomyIndex.length) {
      fs.outputJSONSync(
        path.join(collectionPath, "taxonomy.json"),
        taxonomyIndex
      );
    }
  });
};

/**
 * Indexes Menus into single array to be loaded on app start
 *
 */
const indexMenus = () => {
  const config = getConfig();
  const menus = config.collections.filter((col) => col.folder.includes("menu"));
  menus.forEach((menu) => {
    const folder = menu.folder.replace(`${CMS_KEY}/`, "");
    const menuPath = path.join(DEST_PATH, folder);
    fs.ensureDirSync(menuPath);

    const contents = fs
      .readdirSync(menuPath)
      .filter(
        (filename) => filename.includes(".json") && filename !== "index.json"
      );
    const menuIndex = contents.map((filename) => {
      const file = fs.readFileSync(path.join(menuPath, filename), "utf-8");
      if (file) {
        console.log(`Loaded contents from ${filename}`);
      }
      return JSON.parse(file);
    });

    fs.outputJSONSync(`${menuPath}/index.json`, menuIndex);
  });
};

const copyContent = () => {
  fs.copySync(CMS_PATH, DEST_PATH);
};

console.log(process.env);
copyContent();
indexContent();
indexMenus();
