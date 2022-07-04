// Utilities
import {
  changeTitle,
  getStorageValue,
  setStorageValue,
} from "../browser.utils";

describe("Browser utilities", () => {
  it("should change the title", () => {
    const oldTitle = document.title;
    changeTitle("New title");
    expect(document.title).not.toBe(oldTitle);
    expect(document.title).toBe("New title");
  });

  it("should get a local stored value", () => {
    localStorage.setItem("key", "value");
    expect(getStorageValue("key")).toBe("value");
  });

  it("should store a value locally", () => {
    setStorageValue("key", "My super cool value");
    expect(localStorage.getItem("key")).toBe("My super cool value");
  });
});
