/* istanbul ignore file */

const testData = [
  { title: "test 1", body: "# test one" },
  { title: "test 2", body: "# test two" },
];

const testTax = [
  { key: "testTax", title: "test tax", items: ["testtax1", "testtax2"] },
];

const projectData = [
  {
    phaseData: {
      status: "2",
      phase: "1",
      message: "This is a default message",
    },
    title: "Phase 1 Done",
    subtitle: "Making privacy management more efficient",
    type: "project",
    excerpt:
      "Compliance paperwork management can be a significant burden on privacy offices throughout the federal government as they manage personally identifiable information. The team built a privacy dashboard to manage compliance paperwork, providing easier access, leading to better compliance and time savings, and allowing staff to focus on higher level work.",
    topics: "Compliance, Privacy managers",
    body:
      "Compliance paperwork management can be a significant burden on privacy offices throughout the federal government as they manage personally identifiable information. The team built a privacy dashboard to manage compliance paperwork, providing easier access, leading to better compliance and time savings, and allowing staff to focus on higher level work.\n",
    projectType: "Incremental",
    name: "phase-1-done",
    path: "/project/phase-1-done",
    toc: [],
  },
  {
    phaseData: {
      status: "3",
      phase: "1",
      message: "This is a default message",
    },
    title: "Phase 1 Graduated",
    subtitle: "Making privacy management more efficient",
    type: "project",
    excerpt:
      "Compliance paperwork management can be a significant burden on privacy offices throughout the federal government as they manage personally identifiable information. The team built a privacy dashboard to manage compliance paperwork, providing easier access, leading to better compliance and time savings, and allowing staff to focus on higher level work.",
    topics: "Compliance, Privacy managers",
    body:
      "Compliance paperwork management can be a significant burden on privacy offices throughout the federal government as they manage personally identifiable information. The team built a privacy dashboard to manage compliance paperwork, providing easier access, leading to better compliance and time savings, and allowing staff to focus on higher level work.\n",
    projectType: "Incremental",
    name: "phase-1-graduated",
    path: "/project/phase-1-graduated",
    toc: [],
  },
  {
    phaseData: {
      status: "1",
      phase: "1",
      message: "This is a default message",
    },
    title: "Phase 1 In Progress",
    subtitle: "Making privacy management more efficient",
    type: "project",
    excerpt:
      "Compliance paperwork management can be a significant burden on privacy offices throughout the federal government as they manage personally identifiable information. The team built a privacy dashboard to manage compliance paperwork, providing easier access, leading to better compliance and time savings, and allowing staff to focus on higher level work.",
    topics: "Compliance, Privacy managers",
    body:
      "Compliance paperwork management can be a significant burden on privacy offices throughout the federal government as they manage personally identifiable information. The team built a privacy dashboard to manage compliance paperwork, providing easier access, leading to better compliance and time savings, and allowing staff to focus on higher level work.\n",
    projectType: "Incremental",
    name: "phase-1-in-progress",
    path: "/project/phase-1-in-progress",
    toc: [],
  },
];

export const getAllByContentType = async (props) => {
  if (props.type === "error") {
    throw new Error("Invalid Type.");
  }
  if (props.type === "project") {
    return projectData;
  }
  return testData;
};

export const getContentTypeByName = async (props) => {
  if (props.type === "error") {
    throw new Error("Invalid Type.");
  }
  if (!props.name) {
    throw new Error("Invalid Name.");
  }
  if (props.name === "error") {
    throw new Error("Invalid Name.");
  }
  return testData[0];
};

export const getTaxonomyByContentType = async (props) => {
  if (props.type === "error") {
    throw new Error("Invalid Type.");
  }
  return testTax;
};
