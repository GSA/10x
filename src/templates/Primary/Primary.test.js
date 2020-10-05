import React from "react";
import { mount } from "enzyme";
import Primary from "templates/Primary";
import TestProvider from "test/TestProvider";
import runAsyncRender from "test/utils/runAsyncRender";

describe("<Primary />", () => {
  describe("default render", () => {
    it("should render", () => {
      const wrapper = mount(
        <TestProvider>
          <Primary>
            <span className="test" />
          </Primary>
        </TestProvider>
      );
      runAsyncRender(wrapper);
      expect(wrapper.find(".test").length).toBe(1);
    });
  });
});
