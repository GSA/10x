/* istanbul ignore file */
import SettingsData from "../../json/settings.json";
import FourOhFourData from "../../json/404.json";
import FooterData from "../../json/content/footer/index.json";

export const getSettings = async (props = {}) => {
  return { ...SettingsData, ...FourOhFourData };
};

export const getFooter = async (props = {}) => {
  return FooterData;
};
