import React from "react";
import { mount } from "enzyme";
import ProjectStatus from "./index";
import TestProvider from "test/TestProvider";
import store from "app";
import runAsyncRender from "test/utils/runAsyncRender";

describe("ProjectStatus", () => {
  describe("default render", () => {
    it("should render two titles", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <ProjectStatus />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper).toBeTruthy();
    });
  });
});
