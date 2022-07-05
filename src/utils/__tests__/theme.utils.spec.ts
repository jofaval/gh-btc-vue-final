// Utilities
import {
  doesUserPreferTheme,
  getPreferredTheme,
  reverseTheme,
} from "../theme.utils";

describe("Theme utilities", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it("should return true if the queried theme preference is the user's", () => {
    jest.spyOn(window, "matchMedia").mockReturnValue({
      ...window.matchMedia("(prefers-color-scheme: dark)"),
      matches: true,
    });
    const result = doesUserPreferTheme("dark");
    expect(result).toBe(true);
    expect(window.matchMedia).toHaveBeenCalled();
    expect(window.matchMedia).toHaveBeenCalledWith(
      "(prefers-color-scheme: dark)"
    );
  });

  it("should consider user preference when it does not match", () => {
    jest.spyOn(window, "matchMedia").mockReturnValue({
      ...window.matchMedia("(prefers-color-scheme: light)"),
      matches: true,
    });
    const result = doesUserPreferTheme("light");
    expect(result).toBe(true);
    expect(window.matchMedia).toHaveBeenCalled();
    expect(window.matchMedia).toHaveBeenCalledWith(
      "(prefers-color-scheme: light)"
    );
  });

  it("should handle match media not being available", () => {
    Object.defineProperty(window, "matchMedia", {});
    const result = doesUserPreferTheme("dark");
    expect(result).toBe(false);
  });

  it("should handle no theme specified", () => {
    jest.spyOn(window, "matchMedia").mockReturnValue({
      ...window.matchMedia("(prefers-color-scheme: dark)"),
      matches: true,
    });
    const result = doesUserPreferTheme();
    expect(result).toBe(true);
    expect(window.matchMedia).toHaveBeenCalled();
    expect(window.matchMedia).toHaveBeenCalledWith(
      "(prefers-color-scheme: dark)"
    );
  });

  it("should return dark if the user's preference dark", () => {
    jest.spyOn(window, "matchMedia").mockReturnValue({
      ...window.matchMedia("(prefers-color-scheme: dark)"),
      matches: true,
    });
    expect(getPreferredTheme()).toBe("dark");
  });

  it("should return light if the user's preference light", () => {
    jest.spyOn(Storage.prototype, "getItem").mockReturnValue("");
    jest.spyOn(window, "matchMedia").mockReturnValue({
      ...window.matchMedia("(prefers-color-scheme: light)"),
      matches: false,
    });
    expect(getPreferredTheme()).toBe("light");
  });

  it("should return stored preference if there's one", () => {
    jest.spyOn(Storage.prototype, "getItem").mockReturnValue("stored");
    jest.spyOn(window, "matchMedia").mockReturnValue({
      ...window.matchMedia("(prefers-color-scheme: light)"),
      matches: true,
    });
    expect(getPreferredTheme()).toBe("stored");
  });

  it("should reverse from dark to light", () => {
    expect(reverseTheme("dark")).toBe("light");
  });

  it("should reverse from light to dark", () => {
    expect(reverseTheme("light")).toBe("dark");
  });
});
