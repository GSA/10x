import React from "react";
import { mount } from "enzyme";
import Cards from "./index";
import TestProvider from "test/TestProvider";
import store from "app";
import runAsyncRender from "test/utils/runAsyncRender";

const props = {
  columns: 2,
  className: "TxShadowedCard",
  title: "Section Title",
  text: "Section text",
  items: [
    {
      subtitle: "Test card subtitle",
      title: "Test card title",
      link: "/test"
    },
    {
      subtitle: "Test card subtitle 2",
      title: "Test card title 2",
      link: "/test2"
    }
  ]
};

describe("Cards", () => {
  describe("default render", () => {
    it("should render with classes", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <Cards {...props } />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper).toBeTruthy();
      expect(wrapper.find("props.className")).toBeTruthy();
      expect(wrapper.find("h2").first().text()).toEqual(props.title);
      expect(wrapper.find(".usa-card__body").first().text()).toEqual(props.items[0].subtitle + props.items[0].title);
    });
  });
});
