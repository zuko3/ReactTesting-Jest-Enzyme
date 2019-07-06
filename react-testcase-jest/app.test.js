import * as app from "./app";
jest.mock("./math");

test("calls math.add", () => {
  expect(app.doAdd(1, 2)).toEqual("a");
});

test("calls math.subtract", () => {
  expect(app.doSubtract(1, 2)).toEqual("s");
});
