/* istanbul ignore file */
const timeout = (t = 1000) => {
  return new Promise((resolve) => setTimeout(resolve, t));
};

const ROOT_URL = process.env.PUBLIC_URL;
export const getSettings = async (props = {}) => {
  await timeout();
  const response = await fetch(`${ROOT_URL}/settings.json`);
  const data = await response.json();
  return data;
};
