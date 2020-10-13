import React from "react";
import { mount } from "enzyme";
import Primary from "templates/Primary";
import TestProvider from "test/TestProvider";
import runAsyncRender from "test/utils/runAsyncRender";
import GSAFooter from "./GSAFooter";
import store from "app";
import { getPage } from "app/ContentModule";

describe("<Primary />", () => {
  describe("default render", () => {
    it("should render", async () => {
      await store.dispatch(getPage({ name: "test" }));
      const wrapper = mount(
        <TestProvider>
          <Primary>
            <span className="test" />
          </Primary>
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper.find(".test").length).toBe(1);
    });
  });

  describe("interactions", () => {
    it("should render GSAFooter", async () => {
      const wrapper = mount(<GSAFooter />);
      const button = wrapper.find("button.GSAFooter__toggle");
      button.simulate("click");
      await runAsyncRender(wrapper);
      expect(wrapper.find(".GSAFooter__content").hostNodes().length).toBe(1);
    });
  });
});

// GSAFooter__content
