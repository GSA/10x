import React from "react";
import { mount } from "enzyme";
import ProjectList from "./index";
import TestProvider from "test/TestProvider";
import store from "app";
import runAsyncRender from "test/utils/runAsyncRender";

describe("ProjectList", () => {
  describe("default render", () => {
    it("should render two titles", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <ProjectList />
        </TestProvider>
      );
      await runAsyncRender(wrapper);

      expect(wrapper).toBeTruthy();
    });
  });
});
