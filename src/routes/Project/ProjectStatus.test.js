import React from "react";
import { mount } from "enzyme";
import ProjectStatus from "./ProjectStatus";
import TestProvider from "test/TestProvider";
import store from "app";
import runAsyncRender from "test/utils/runAsyncRender";

const data = {
  status: "1",
  phase: "4",
};

describe("ProjectStatus", () => {
  describe("default render", () => {
    it("should render project status", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <ProjectStatus data={data} />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper).toBeTruthy();
    });

    it("should render project status as graduated", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <ProjectStatus
            phase="4"
            data={{
              ...data,
              status: "3",
            }}
          />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper).toBeTruthy();
    });
  });
});
