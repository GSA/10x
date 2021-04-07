import React from "react";
import { mount } from "enzyme";
import Links from "./index";
import TestProvider from "test/TestProvider";
import store from "app";
import runAsyncRender from "test/utils/runAsyncRender";

const props = {
  className: "check",
  title: "Section Title",
  subtitle: "Section subtitle",
  text: "Section text",
  button: {
    text: "section button",
    link: "/test"
  },
  items: [
    {
      link: "/test",
      title: "Test card title",
    },
    {
      link: "/test2",
      title: "Test card title 2",
    }
  ]
};

describe("Links", () => {
  describe("default render", () => {
    it("should render with classes", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <Links {...props } />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper).toBeTruthy();
      expect(wrapper.find(".TxContent__links").length).toBe(1);
      expect(wrapper.find(".TxContent__links .display-flex a").length).toBe(props.items.length);
      expect(wrapper.find("h2").first().text()).toEqual(props.title);
      expect(wrapper.find(".usa-button").first().text()).toEqual(props.button.text);
    });
  });
});
