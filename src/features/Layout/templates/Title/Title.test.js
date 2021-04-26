import React from "react";
import { mount } from "enzyme";
import Title from "./index";
import TestProvider from "test/TestProvider";
import store from "app";
import runAsyncRender from "test/utils/runAsyncRender";

const props = {
  title: "Test title",
  subtitle: "Test subtitle"
};

describe("Cards", () => {
  describe("default render", () => {
    it("should render with classes", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <Title {...props } />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper).toBeTruthy();
      expect(wrapper.find("h1").first().text()).toEqual(props.title);
      expect(wrapper.find(".TxLede").first().text()).toEqual(props.subtitle);
    });
  });
});
