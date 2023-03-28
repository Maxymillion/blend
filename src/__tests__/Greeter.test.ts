import {Greeter} from "../index";

describe("My Greeter", () => {
  test("My Greeter = Carl", () => {
    expect(Greeter("Carl")).toBe("Hello Carl");
  });
});
