import React from "react";
import { Mount, shallow } from "enzyme";
import List from "../List";

describe("List", () => {
  let list;

  beforeEach(() => {
    list = shallow(<List data={["Name 1", "Name 2", "Name 3"]} />);
  });

  it("List renders table", () => {
    expect(list.find("table").length).toEqual(1);
  });

  it("Class of rendered table", () => {
    expect(list.find(".myClass").length).toEqual(1);
  });
});
