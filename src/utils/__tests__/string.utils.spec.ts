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
    expect(
      compare({
        first: "Exact",
        second: "Exact",
        caseSensitive: true,
        contains: false,
      })
    ).toBe(true);
    expect(
      compare({
        first: "Exact",
        second: "exact",
        caseSensitive: true,
        contains: false,
      })
    ).toBe(false);
  });

  it("should compare two equal strings case insensitive", () => {
    expect(compare({ first: "Exact", second: "Exacts", contains: false })).toBe(
      false
    );
    expect(compare({ first: "Exact", second: "exact", contains: false })).toBe(
      true
    );
  });

  it("should compare if one string contains the other", () => {
    expect(
      compare({
        first: "This may be an exact comparison",
        second: "exact",
      })
    ).toBe(true);
    expect(
      compare({
        first: "exact",
        second: "This may be an exact comparison",
      })
    ).toBe(true);
    expect(
      compare({
        first: "One thing leads to another",
        second: "leader",
      })
    ).toBe(false);
    expect(
      compare({
        first: "leader",
        second: "One thing leads to another",
      })
    ).toBe(false);
  });
});
