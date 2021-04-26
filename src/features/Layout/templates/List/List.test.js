import React from "react";
import { mount } from "enzyme";
import List from "./index";
import TestProvider from "test/TestProvider";
import store from "app";
import runAsyncRender from "test/utils/runAsyncRender";

const props = {
  title: "List Title",
  subtitle: "List subtitle",
  text: "list text",
  columns: "1",
  items: [
    {
      text: "text content 1",
      title: "first title"
    },
    {
      text: "text content 2",
      title: "second title"
    }
  ],
  button: {
    text: "section button",
    link: "/test"
  },
};
const props2 = {
  ...props,
  columns: "2"
};

describe("List", () => {
  describe("default render", () => {
    it("should render", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <List {...props } data={props} />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper).toBeTruthy();
      expect(wrapper.find("TxList")).toBeTruthy();
      expect(wrapper.find("h2").first().text()).toEqual(props.title);
      expect(wrapper.find("Col").first().prop("desktop")).toEqual("12");
    });
    it("should render with 1 column", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <List {...props } data={props} />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper.find("Col").first().prop("desktop")).toEqual("12");
    });
    it("should render with 2 column", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <List {...props2 } data={props2} />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper.find("Col").first().prop("desktop")).toEqual("6");
    });
  });
});
