import React from "react";
import { mount } from "enzyme";
import LocationMenu from "features/LocationMenu";
import TestProvider from "test/TestProvider";
import store from "app";
import { getMenuList } from "app/MenuModule";
import runAsyncRender from "test/utils/runAsyncRender";

describe("<Menu />", () => {
  describe("default render", () => {
    beforeEach(() => {
      store.dispatch(getMenuList({}));
    });
    it("should render", async () => {
      const wrapper = mount(
        <TestProvider store={store}>
          <LocationMenu />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper.find("a").length).toBe(4);
    });

    it("should render on another route", async () => {
      const wrapper = mount(
        <TestProvider store={store} route={["/about"]}>
          <LocationMenu />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper.find("a").length).toBe(4);
    });
  });
});
