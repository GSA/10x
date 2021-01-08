/* istanbul ignore file */
import MenuData from "app/json/menus/index.json";
export const getAllMenus = async (props = {}) => {
  return MenuData;
};
