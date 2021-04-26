import React from "react";
import { mount } from "enzyme";
import Primary from "templates/Primary";
import Header from "./Header";
import TestProvider from "test/TestProvider";
import runAsyncRender from "test/utils/runAsyncRender";
import store from "app";
import { getPage } from "app/ContentModule";
import Logo from "components/Logo";

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
});

describe("<Header />", () => {
  describe("default render", () => {
    it("should render the Header", async () => {
      await store.dispatch(getPage({ name: "test" }));
      const wrapper = mount(
        <TestProvider>
           <Header logo={<Logo />} />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper.find(".usa-banner__header").length).toBe(1);
    });
    it("should handle clicks that expand a list of nav items", async () => {
      await store.dispatch(getPage({ name: "test" }));
      const wrapper = mount(
        <TestProvider>
           <Header logo={<Logo />} />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      const button = wrapper.find("button#usa-nav-item-0").first();
      expect(button.prop("aria-expanded")).toBeFalsy();
      button.simulate("click");
      const clickedButton = wrapper.find("button#usa-nav-item-0").first();
      expect(clickedButton.prop("aria-expanded")).toBeTruthy();
      const list = wrapper.find("#extended-nav-section-usa-nav-item-0");
      expect(list.prop("hidden")).toBeFalsy();
    });
  });
});
