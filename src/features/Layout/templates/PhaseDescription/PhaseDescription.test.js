import React from "react";
import { mount } from "enzyme";
import PhaseDescription from "./index";
import TestProvider from "test/TestProvider";
import store from "app";
import runAsyncRender from "test/utils/runAsyncRender";

const props = {
  subtitle: "Phase 1",
  title: "Investigate",
  className: "bg--sky",
};

describe("PhaseDescription", () => {
  describe("default render", () => {
    it("should render with classes", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <PhaseDescription {...props } />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper).toBeTruthy();
      expect(wrapper.find(`.TxRingCards.${props.className}`)).toBeTruthy();
      expect(wrapper.find(".TxRingCards__ring").text()).toEqual(props.subtitle + props.title);
    });
  });
});
