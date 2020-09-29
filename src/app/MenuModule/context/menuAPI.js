/* istanbul ignore file */
const timeout = (t = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, t));
};

const ROOT_URL = "https://10xwebsite.github.io/10x-content";
// const ROOT_URL = "https://raw.githubusercontent.com/10xWebsite/10x-content/main";
export const getAllMenus = async (props = {}) => {
  await timeout();
  const response = await fetch(`${ROOT_URL}/menus/index.json`);
  const data = await response.json();
  return data;
};
