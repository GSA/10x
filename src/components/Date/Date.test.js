import React from "react";
import { mount } from "enzyme";
import Date from "components/Date";

const UNIX_TIMESTAMP = 1577858400000;

describe("<Date />", () => {
  describe("default render", () => {
    it("should render", () => {
      const wrapper = mount(<Date>{UNIX_TIMESTAMP}</Date>);
      expect(wrapper.text()).toBe("January 1, 2020");
    });

    it("should render format", () => {
      const wrapper = mount(<Date format={"MM-DD-YYYY"}>{UNIX_TIMESTAMP}</Date>);
      expect(wrapper.text()).toBe("01-01-2020");
    });
  });
});
