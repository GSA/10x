/* istanbul ignore file */
import PageData from "app/json/content/page/index.json";
import PostData from "app/json/content/post/index.json";
import ProjectData from "app/json/content/project/index.json";
import ReportData from "app/json/content/report/index.json";

const types = {
  page: PageData,
  post: PostData,
  project: ProjectData,
  report: ReportData,
};

export const getAllByContentType = async (props) => {
  return types[props.type];
};

export const getContentTypeByName = async (props) => {
  const { type, name } = props;
  const data = types[type];
  const item = data.find((d) => d.name === name) || {};
  if (!item.name) {
    throw new Error("Not Found");
  }
  return item;
};
