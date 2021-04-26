import React from "react";
import { mount } from "enzyme";
import Ghostwriter from "./index";

describe("<Ghostwriter />", () => {
  describe("default render", () => {
    it("should render", () => {
      const wrapper = mount(<Ghostwriter />);
      expect(wrapper.find("h1").text()).toBe("10x Homepage");
    });
  });
});
