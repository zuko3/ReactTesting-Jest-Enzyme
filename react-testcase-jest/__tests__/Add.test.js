import React from "react";
import { mount, shallow } from "enzyme";
import Add from "../Add";

describe("Add", () => {
  let add;
  let onAdd;

  beforeEach(() => {
    onAdd = jest.fn();
    add = mount(<Add onAdd={onAdd} />);
  });

  it("Add requires onAdd prop", () => {
    console.log(add.instance().props);
    expect(add.instance().props.onAdd).toBeDefined();
  });

  it("Add renders button", () => {
    const button = add.find("button").first();
    expect(button).toBeDefined();
  });

  it("Button click calls onAdd", () => {
    const button = add.find("button").first();
    const input = add.find("input").first();
    input.simulate("change", { target: { value: "Name 4" } });
    button.simulate("click");
    expect(onAdd).toBeCalledWith("Name 4");
  });
});
