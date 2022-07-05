// Utilities
import {
  changeTitle,
  getStorageValue,
  setStorageValue,
} from "../browser.utils";

describe("Browser utilities", () => {
  beforeEach(jest.clearAllMocks);

  it("should change the title", () => {
    const oldTitle = document.title;
    changeTitle("New title");
    expect(document.title).not.toBe(oldTitle);
    expect(document.title).toBe("New title");
  });

  it("should get a local stored value", () => {
    jest.spyOn(Storage.prototype, "getItem").mockReturnValue("stored");

    getStorageValue("key");

    expect(localStorage.getItem).toHaveBeenCalled();
    expect(localStorage.getItem).toHaveBeenCalledWith("key");
  });

  it("should store a value locally", () => {
    jest.spyOn(Storage.prototype, "setItem");

    setStorageValue("key", "My super cool value");

    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "key",
      "My super cool value"
    );
  });
});
