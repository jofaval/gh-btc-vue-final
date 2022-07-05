// Utilities
import utils from "../index";

describe("Utilities", () => {
  it("should have all the expected properties", () => {
    const props = ["stringUtils", "browserUtils", "themeUtils", "serviceUtils"];
    props.map((key: string) => expect(key in utils).toBe(true));
  });
});
