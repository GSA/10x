/* istanbul ignore file */

const ROOT_URL = process.env.PUBLIC_URL;

export const getSettings = async (props = {}) => {
  const response = await fetch(`${ROOT_URL}/settings.json`);
  const data = await response.json();
  return data;
};

export const getFooter = async (props = {}) => {
  const response = await fetch(`${ROOT_URL}/content/footer/index.json`);
  const data = await response.json();
  return data;
};
