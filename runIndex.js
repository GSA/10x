const path = require('path');
const fs = require('fs-extra');
const YAML = require('yaml');
const xml = require('js2xmlparser');

const excludedPathTypes = ['page'];

const PROD_URL = 'https://10x.gsa.gov';

const CMS_KEY = 'cms';
const DEST_KEY = 'src/app/json';
const CONFIG_KEY = 'public';

const HOMEPAGE_KEY = 'homepage';

const CMS_PATH = path.join(__dirname, CMS_KEY);
const DEST_PATH = path.join(__dirname, DEST_KEY);
const CONFIG_PATH = path.join(__dirname, CONFIG_KEY);

/**
 * Gets the config file
 *
 */
const getConfig = () =>
  YAML.parse(fs.readFileSync(path.join(CONFIG_PATH, '/admin/config.yml'), 'utf-8'));

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
  fileData.name = filename.replace(/\.json/, '');
  fileData.path = `/${
    excludedPathTypes.includes(fileData.type) ? fileData.name : `${fileData.type}/`
  }${fileData.name}`;
  return fileData;
};

/**
 * Indexes all content directories
 *
 */
const indexContent = () => {
  const config = getConfig();
  const collections = config.collections.filter(({ folder = '' }) => folder.includes('content'));
  // iterate over the specified Content types
  collections.forEach((collection) => {
    const folder = collection.folder.replace(`${CMS_KEY}/`, '');
    const collectionPath = path.join(DEST_PATH, folder);
    fs.ensureDirSync(collectionPath);
    const contents = fs
      .readdirSync(collectionPath)
      .filter((filename) => filename !== 'index.json' && filename.includes('.json'));
    const contentIndex = contents.map((filename) => {
      const data = addContentMetaData(filename, collectionPath, collection);
      fs.outputJSONSync(path.join(collectionPath, filename), data);
      return data;
    });

    fs.outputJSONSync(path.join(collectionPath, 'index.json'), contentIndex);
  });
};

/**
 * Indexes Menus into single array to be loaded on app start
 *
 */
const indexMenus = () => {
  const config = getConfig();
  const menus = config.collections.filter(({ folder = '' }) => folder.includes('menu'));
  menus.forEach((menu) => {
    const folder = menu.folder.replace(`${CMS_KEY}/`, '');
    const menuPath = path.join(DEST_PATH, folder);
    fs.ensureDirSync(menuPath);

    const contents = fs
      .readdirSync(menuPath)
      .filter((filename) => filename.includes('.json') && filename !== 'index.json');
    const menuIndex = contents.map((filename) => {
      const file = fs.readFileSync(path.join(menuPath, filename), 'utf-8');
      if (file) {
        console.log(`Loaded contents from ${filename}`);
      }
      return JSON.parse(file);
    });

    fs.outputJSONSync(`${menuPath}/index.json`, menuIndex);
  });
};

const generateSitemap = (collections = ['page', 'post', 'project', 'report']) => {
  const sitePaths = { page: '', post: '/posts', project: '/projects', report: '/reports' };
  const data = collections.reduce((acc, name) => {
    const file = path.join(DEST_PATH, 'content', name, 'index.json');
    fs.ensureFile(file);
    const contents = fs.readJsonSync(file);
    const pages = contents
      .filter(
        // don't output stub pages. Real posts and pages have a sections attribute. real projects have an impact attribute
        (item) => item.sections || item.impact
      )
      .map((item) => {
        const modDate = new Date(
          fs.statSync(path.join(CMS_PATH, 'content', name, item.name + `.json`)).mtime || Date.now()
        );
        const URL = `${PROD_URL}${sitePaths[name]}/${
          item.name && item.name === HOMEPAGE_KEY ? '' : item.name + '/'
        }`;
        return {
          url: URL,
          date: modDate.toISOString(),
        };
      });
    return [...acc, ...pages];
  }, []);

  const xmlJson = {
    '@': {
      xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
      'xmlns:image': 'http://www.google.com/schemas/sitemap-image/1.1',
      'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
    },
    url: data.map((item) => ({ loc: item.url, lastmod: item.date })),
  };

  const xmlData = xml.parse('urlset', xmlJson);
  fs.outputFileSync(path.join(CONFIG_PATH, 'sitemap.xml'), xmlData);
};

const copyContent = () => {
  fs.copySync(CMS_PATH, DEST_PATH);
};

copyContent();
indexContent();
indexMenus();
generateSitemap();
