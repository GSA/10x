import React from "react";
import { mount } from "enzyme";
import FourOhFour from "routes/FourOhFour";
import TestProvider from "test/TestProvider";
import store from "app";
import { Route } from "react-router-dom";
import Page from "../Page/index";
import runAsyncRender from "test/utils/runAsyncRender";

describe("<FourOhFour />", () => {
  describe("default render", () => {
    it("should render", () => {
      const wrapper = mount(
        <TestProvider>
          <FourOhFour />
        </TestProvider>
      );
      expect(wrapper.find(".Tx__FourOhFour").hostNodes().length).toBe(1);
    });
    it("should redirect on a known path", async () => {
      const wrapper = mount(
        <TestProvider store={store} route={["/test-redirect"]}>
          <Route path="/:name" component={Page} />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper.find("h1").text()).toBe("Test title");
    });
  });
});
