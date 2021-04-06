import React from "react";
import { mount } from "enzyme";
import StatsCards from "./index";
import TestProvider from "test/TestProvider";
import store from "app";
import runAsyncRender from "test/utils/runAsyncRender";

const props = {
  className: "TxShadowedCard",
  title: "Section Title",
  text: "Section text",
  items: [
    {
      number: "1",
      title: "first statistic"
    },
    {
      number: "2",
      title: "second statistic"
    }
  ]
};

describe("StatsCards", () => {
  describe("default render", () => {
    it("should render with classes", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <StatsCards {...props } />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper).toBeTruthy();
      expect(wrapper.find(".TxShadowedCard")).toBeTruthy();
      expect(wrapper.find("h2").first().text()).toEqual(props.title);
      expect(wrapper.find(".usa-card__body").first().text()).toEqual(props.items[0].number + props.items[0].title);
    });
  });
});
