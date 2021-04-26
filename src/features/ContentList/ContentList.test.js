import React from "react";
import { mount } from "enzyme";
import ContentList from "./index";
import TestProvider from "test/TestProvider";
import store from "app";
import runAsyncRender from "test/utils/runAsyncRender";

describe("ContentList", () => {
  describe("default render", () => {
    it("should render two titles", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <ContentList />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper.find(".ContentList__item").length).toBe(2);
      expect(wrapper.find(".ContentList__item").first().text()).toBe("test 1");
    });
  });
  describe("render variations", () => {
    it("should render two titles in reverse alphabetical order", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <ContentList sortKey="title" sortOrder="desc" />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper.find(".ContentList__item").first().text()).toBe("test 2");
    });

    it("should render two titles sorted by title even if sort key is not available", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <ContentList sortKey="name" />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper.find(".ContentList__item").length).toBe(2);
      expect(wrapper.find(".ContentList__item").first().text()).toBe("test 1");
    });
    it("should render items sorted by a numeric key", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <ContentList sortKey="order" type="numeric" />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper.find(".ContentList__item").length).toBe(3);
      expect(wrapper.find("h1").first().text()).toBe("Zero");
    });
  });
  describe("render errors", () => {
    it("should render when no items are found for a known content type", async () => {
      const wrapper = mount(
        <TestProvider>
          <ContentList type="empty"/>
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper.find("h1").text()).toBe("No content found.");
    });

    it("should render error on incorrect type", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <ContentList type="error" />
        </TestProvider>
      );
      await runAsyncRender(wrapper);

      expect(wrapper.find(".ContentList__error").length).toBe(1);
    });

    it("should render custom Error component", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <ContentList
            type="error"
            error={() => <h1 id="TestError">Test Error</h1>}
          />
        </TestProvider>
      );
      await runAsyncRender(wrapper);

      expect(wrapper.find("#TestError").length).toBe(1);
    });
  });
});
