import React from "react";
import { mount } from "enzyme";
import Welcome from "../Welcome";

describe("cheeck the Welcome", () => {
  it("should check the welcome structure", () => {
    const wrapper = mount(<Welcome />);
    expect(wrapper).toMatchSnapshot();
  });
  it("Welcome renders hello world", () => {
    const welcome = mount(<Welcome />);
    expect(welcome.find("div").text()).toEqual("Hello world");
  });
});
