import React from "react";
import { mount } from "enzyme";
import ReportList from "./index";
import TestProvider from "test/TestProvider";
import store from "app";
import runAsyncRender from "test/utils/runAsyncRender";

describe("ReportList", () => {
  describe("default render", () => {
    it("should render", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <ReportList />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper).toBeTruthy();
    });

    it("should click card", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <ReportList />
        </TestProvider>
      );
      await runAsyncRender(wrapper);

      const card = wrapper.find(".ReportCard").first();
      card.simulate("click");
      await runAsyncRender(wrapper);
      expect(wrapper.find(".ReportList").hostNodes().length).toBe(1);
    });
  });
});
