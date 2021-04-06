import React from "react";
import { mount } from "enzyme";
import Post from "./index";
import TestProvider from "test/TestProvider";
import store from "app";
import runAsyncRender from "test/utils/runAsyncRender";
import { Route } from "react-router-dom";

describe("Post", () => {
  describe("default render", () => {
    it("should render", async () => {
      const wrapper = mount(
        <TestProvider store={store} route={["/posts/test-post"]}>
          <Route path="/posts/:name" component={Post} />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper.find("h1").first().text()).toBe(
        "Test post"
      );
    });
    it("should render error on incorrect path name", async () => {
      const wrapper = mount(
        <TestProvider store={store} route={["/posts/error"]}>
          <Route path="/posts/:name" component={Post} />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper.find(".Tx__FourOhFour").length).toBe(1);
    });
  });
});

