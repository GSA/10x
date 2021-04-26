import React from "react";
import { mount } from "enzyme";
import Layout from "./index";

import Provider from "test/TestProvider";

const itemsWithGrid = [
  { type: "break" },
  { type: "markdown" },
  { type: "projects" },
  { type: "callout" },
  { type: "cards" },
  { type: "title" },
  { type: "links" },
  { type: "list" },
  { type: "markdownSpecial" },
  { type: "phaseDescription" },
  { type: "phaseGraphic" },
  { type: "statsCards" }
];

const itemsWithoutGrid = [
  { type: "ghostwriter" },
];

const nonexistentItems = [
  { type: "nonexistent" },
];

describe("<Layout />", () => {
  describe("default render a grid container for each child", () => {
    it("should render", () => {
      const wrapper = mount(
        <Provider>
          <Layout items={itemsWithGrid} />
        </Provider>
      );
      expect(wrapper.find(".grid-container").hostNodes().length).toBe(itemsWithGrid.length);
    });
    it("should not render a grid container for Ghostwriter", () => {
      const wrapper = mount(
        <Provider>
          <Layout items={itemsWithoutGrid} />
        </Provider>
      );
      expect(wrapper.find(".grid-container").hostNodes().length).toBe(0);
    });
    it("should not render anything for a component type that doesn't exist", () => {
      console.warn = jest.fn();
      const wrapper = mount(
        <Provider>
          <Layout items={nonexistentItems} />
        </Provider>
      );
      expect(console.warn.mock.calls[0][0]).toBe(`Module type "${nonexistentItems[0].type}" not defined.`);
      expect(wrapper.find(".grid-container").hostNodes().length).toBe(0);
      expect(wrapper.find("Layout").children().length).toBe(0);
    });
  });
});
