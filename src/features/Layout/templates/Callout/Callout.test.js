import React from "react";
import { mount } from "enzyme";
import Callout from "./index";
import TestProvider from "test/TestProvider";
import store from "app";
import runAsyncRender from "test/utils/runAsyncRender";

const props = {
  variant: "check",
  title: "Section Title",
  text: "Section text",
  button: {
    text: "section button",
    link: "/test"
  },
  items: [
    {
      subtitle: "Test card subtitle",
      title: "Test card title",
    },
    {
      subtitle: "Test card subtitle 2",
      title: "Test card title 2",
    }
  ]
};

describe("Callout", () => {
  describe("default render", () => {
    it("should render with classes", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <Callout {...props } />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper).toBeTruthy();
      expect(wrapper.find(".TxCallout__icon--check").length).toBe(props.items.length);
      expect(wrapper.find("h2").first().text()).toEqual(props.title);
      expect(wrapper.find(".usa-button").first().text()).toEqual(props.button.text);
    });
  });
});
