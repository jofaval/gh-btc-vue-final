// Store
import themeModule, {
  actions,
  getters,
  mutations,
  ThemeStateType,
} from "../theme.module";

describe("Theme Module", () => {
  let state: ThemeStateType;

  beforeEach(() => {
    state = {
      theme: "dark",
    };
  });

  it("should not be null", () => {
    expect(themeModule).not.toBe(null);
  });

  it("should return the current theme", () => {
    expect(getters.theme(state)()).toBe("dark");
  });

  it("should return the oppiste theme", () => {
    expect(getters.oppositeTheme(state)()).toBe("light");
  });

  it("should save the current theme", () => {
    jest.spyOn(Storage.prototype, "setItem");
    mutations.updateTheme(state, "light");
    expect(localStorage.setItem).toHaveBeenCalled();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "preferred-theme",
      "light"
    );
  });

  it("should save the current theme", () => {
    jest.spyOn(Storage.prototype, "setItem");
    const commit = jest.fn();
    actions.toggleTheme({ state, commit });
    expect(commit).toHaveBeenCalled();
    expect(commit).toHaveBeenCalledWith("updateTheme", "light");
  });
});
