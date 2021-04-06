import React from "react";
import { mount } from "enzyme";
import PostList from "./index";
import PostCard from "./PostCard";
import TestProvider from "test/TestProvider";
import store from "app";
import runAsyncRender from "test/utils/runAsyncRender";

const postData = {
  slug: "test-post",
  path: "/posts/test-post",
  date: "2021-01-01T05:00:00.000Z",
  title: "Test post",
  excerpt: "Excerpt"
}

describe("PostList", () => {
  describe("default render", () => {
    it("should render a list", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <PostList />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper.find(".PostList")).toBeTruthy();
    });
    it("should render a card", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <PostCard data={postData} />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper.find(".PostCard")).toBeTruthy();
      expect(wrapper.find("time").prop("dateTime")).toBe("2021-01-01T05:00:00.000Z");
      expect(wrapper.find("h2").text()).toBe("Test post");
    });
    it("should render a card even if no date provided", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <PostCard data={{...postData, date:null }} />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper.find(".PostCard")).toBeTruthy();
      expect(wrapper.find("time").prop("dateTime")).toBeTruthy();
    });
    it("should use the seo description if no excerpt is provided", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <PostCard data={{...postData, excerpt:null, seo: { description: "description text"} }} />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper.find(".PostCard")).toBeTruthy();
      expect(wrapper.find(".PostCard").find("p").text()).toBe("description text");

    });
  });
  
});
