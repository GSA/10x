import React from "react";
import { mount } from "enzyme";
import Logo from "components/Logo";

describe("<Logo />", () => {
  describe("default render", () => {
    it("should render", () => {
      const wrapper = mount(<Logo />);
      expect(wrapper.text()).toBe("10x");
    });
  });
});
