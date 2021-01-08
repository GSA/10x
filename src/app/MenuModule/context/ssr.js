/* istanbul ignore file */
import MenuData from "../../json/menus/index.json";
export const getAllMenus = async (props = {}) => {
  return MenuData;
};
