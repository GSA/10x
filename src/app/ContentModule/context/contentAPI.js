/* istanbul ignore file */
const timeout = (t = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, t));
};

const ROOT_URL = process.env.PUBLIC_URL;
export const getAllByContentType = async (props) => {
  await timeout();
  const { type } = props;
  const response = await fetch(`${ROOT_URL}/content/${type}/index.json`);
  const data = await response.json();
  return data;
};

export const getContentTypeByName = async (props) => {
  await timeout();
  const { type, name } = props;
  const response = await fetch(`${ROOT_URL}/content/${type}/${name}.json`);
  const data = await response.json();
  return data;
};

export const getTaxonomyByContentType = async (props) => {
  await timeout();
  const { type } = props;
  const response = await fetch(`${ROOT_URL}/content/${type}/taxonomy.json`);
  const data = await response.json();
  return data;
};
