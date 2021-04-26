import React from "react";
import { mount } from "enzyme";
import PhaseGraphic from "./index";
import TestProvider from "test/TestProvider";
import store from "app";
import runAsyncRender from "test/utils/runAsyncRender";

const props = {
  items: [
    {
      subtitle: "Investigation",
      title: "Is this a bad idea?",
      suffix: "$",
      body: "Teams research if the idea is trying to solve an actual problem in the federal space and identify potential roadblocks, opportunities, and reach.",
      className: "bg--1"
    },
  ]
};

describe("PhaseGraphic", () => {
  describe("default render", () => {
    it("should render with classes", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <PhaseGraphic {...props } />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper).toBeTruthy();
      expect(wrapper.find(".TxCallout__ringer")).toBeTruthy();
      expect(wrapper.find(".TxCallout__ringer").find(props.items[0].className)).toBeTruthy();
      expect(wrapper.find(".TxCallout__card-header").text()).toEqual(props.items[0].subtitle + props.items[0].title + props.items[0].suffix);
    });
  });
});
