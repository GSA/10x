import React from "react";
import { mount } from "enzyme";
import Project from "./index";
import TestProvider from "test/TestProvider";
import store from "app";
import runAsyncRender from "test/utils/runAsyncRender";
import { Route } from "react-router-dom";

describe("Project", () => {
  describe("default render", () => {
    it("should render", async () => {
      const wrapper = mount(
        <TestProvider store={store} route={["/projects/test"]}>
          <Route path="/projects/:name" component={Project} />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper.find("h1").first().text()).toBe("test 1");
    });
    it("should render error on incorrect path name", async () => {
      const wrapper = mount(
        <TestProvider store={store} route={["/projects/error"]}>
          <Route path="/projects/:name" component={Project} />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper.find(".Page__error").length).toBe(1);
    });
  });
});
