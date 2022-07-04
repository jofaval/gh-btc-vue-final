// Utilities
import { capitalize, sanitize, compare } from "../string.utils";

describe("String utilities", () => {
  it("should capitalize only the first letter of a sentence", () => {
    expect(capitalize("this works just fine")).toBe("This works just fine");
    expect(capitalize("camelCase")).toBe("CamelCase");
  });

  it("should properly sanitize a string", () => {
    expect(sanitize('"This will have no quotes')).toBe(
      "This will have no quotes"
    );
  });

  it("should compare two equal strings", () => {
    expect(compare({ first: "Exact", second: "exact" })).toBe(true);
    expect(
      compare({ first: "Exact", second: "exact", caseSensitive: true })
    ).toBe(false);
  });

  it("should compare if one string contains the other", () => {
    expect(
      compare({
        first: "This may be an Exact comparison",
        second: "exact",
        contains: true,
        caseSensitive: true,
      })
    ).toBe(false);
    expect(
      compare({
        first: "One thing leads to another",
        second: "lead",
        contains: true,
      })
    ).toBe(true);
  });
});
