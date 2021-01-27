/* istanbul ignore file */
import SettingsData from "app/json/settings.json";
import FourOhFourData from "app/json/404.json";
import Redirects from "app/json/redirects.json";
import FooterData from "app/json/content/footer/index.json";

export const getSettings = async (props = {}) => {
  return { ...SettingsData, ...FourOhFourData, ...Redirects };
};

export const getFooter = async (props = {}) => {
  return FooterData;
};
