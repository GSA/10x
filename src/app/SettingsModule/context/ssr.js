/* istanbul ignore file */
import FourOhFourData from "app/json/404.json";
import Redirects from "app/json/redirects.json";
import FooterData from "app/json/content/footer/index.json";

export const getSettings = async (props = {}) => {
  return { ...FourOhFourData, ...Redirects };
};

export const getFooter = async (props = {}) => {
  return FooterData;
};
