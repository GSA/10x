/* istanbul ignore file */

const testData = [
  {
    key: "global",
    items: [
      {
        type: "nested",
        prefix: "Our",
        text: "STORY",
        items: [
          {
            type: "page",
            link: "fueling-innovation",
            text: "Fueling innovation"
          },
          {
            type: "page",
            link: "making-each-dollar-count",
            text: "Making each dollar count"
          },
          {
            type: "page",
            link: "designing-success",
            text: "Designing success"
          },
          {
            type: "page",
            link: "news-updates",
            text: "News and updates"
          },
          {
            type: "page",
            link: "reports",
            text: "Impact"
          }
        ]
      },
      {
        type: "page",
        text: "PROCESS",
        link: "process",
        prefix: "Our"
      },
      {
        type: "page",
        link: "projects",
        prefix: "Our",
        text: "PROJECTS"
      },
      {
        type: "page",
        prefix: "Our",
        text: "CHALLENGE TO YOU",
        link: "our-challenge-to-you"
      }
    ],
  },
];

export const getAllMenus = async (props) => {
  if (props.error) {
    throw new Error("Invalid Props.");
  }

  return testData;
};
