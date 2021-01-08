/* istanbul ignore file */
import SettingsData from "../../app/json/settings.json";
import FourOhFourData from "../../app/json/404.json";
import FooterData from "../../app/json/content/footer/index.json";

export const getSettings = async (props = {}) => {
  return { ...SettingsData, ...FourOhFourData };
};

export const getFooter = async (props = {}) => {
  return FooterData;
};
