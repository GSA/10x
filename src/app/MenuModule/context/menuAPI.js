/* istanbul ignore file */
const timeout = (t = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, t));
};

const ROOT_URL = "";
export const getAllMenus = async (props = {}) => {
  await timeout();
  const response = await fetch(`${ROOT_URL}/menus/index.json`);
  const data = await response.json();
  return data;
};
