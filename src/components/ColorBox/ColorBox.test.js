import React from "react";
import { mount } from "enzyme";
import ColorBox from "components/ColorBox";

describe("<ColorBox />", () => {
  describe("default render", () => {
    it("should render", () => {
      const wrapper = mount(<ColorBox />);
      expect(wrapper.find(".bg-primary-vivid").length).toBe(1);
    });
    it("should render outline variant", () => {
      const wrapper = mount(<ColorBox variant="outline" />);
      expect(wrapper.find(".border-primary-vivid").length).toBe(1);
    });
  });
});
