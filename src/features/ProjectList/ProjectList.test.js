import React from "react";
import { mount } from "enzyme";
import ProjectList from "./index";
import TestProvider from "test/TestProvider";
import store from "app";
import runAsyncRender from "test/utils/runAsyncRender";

describe("ProjectList", () => {
  describe("default render", () => {
    it("should render", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <ProjectList />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper).toBeTruthy();
    });

    it("should click card", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <ProjectList />
        </TestProvider>
      );
      await runAsyncRender(wrapper);

      const card = wrapper.find(".ProjectCard").first();
      card.simulate("click");
      await runAsyncRender(wrapper);
      expect(wrapper.find(".ProjectList").hostNodes().length).toBe(1);
    });
  });
});
