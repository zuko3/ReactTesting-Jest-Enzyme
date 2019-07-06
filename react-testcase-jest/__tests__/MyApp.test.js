import React from "react";
import { shallow } from "enzyme";
import MyApp from "../MyApp";

describe("MyApp", () => {
  let app;

  beforeEach(() => {
    app = shallow(<MyApp />);
  });

  it("App renders nested components", () => {
    expect(app.find("Add").length).toEqual(1);
    expect(app.find("List").length).toEqual(1);
  });

  it("onAdd updates List", () => {
    const add = app.find("Add").first();
    add.props().onAdd("Name 1");
    app.update();
    const list = app.find("List").first();
    const listData = list.props().data;
    expect(listData.length).toEqual(1);
    expect(listData[0]).toEqual("Name 1");
  });
});