// Vendors
import Vue from "vue";
// Utilities
import * as browserUtils from "@/utils/browser.utils";
import * as stringUtils from "@/utils/string.utils";
// Router
import router from "../index";
import { routeChangeTitle } from "../router";
// Mocks
const mockGetStorageValue = jest.fn();
jest.mock("@/utils/browser.utils");
jest.mock("@/utils/string.utils");
jest.spyOn(browserUtils, "changeTitle");
jest.spyOn(stringUtils, "capitalize");

describe("Router", () => {
  beforeEach(async () => {
    await Vue.nextTick();
    jest.clearAllMocks();

    // Preferred theme
    mockGetStorageValue.mockReturnValue("dark");
  });

  it("should not be null", () => {
    expect(router).not.toBeNull();
  });

  it("should change the document's title", async () => {
    jest.spyOn(stringUtils, "capitalize").mockReturnValue("Author");
    await router.replace("/author");
    await Vue.nextTick();

    expect(stringUtils.capitalize).toHaveBeenCalled();
    expect(stringUtils.capitalize).toHaveBeenCalledWith("Author");

    expect(browserUtils.changeTitle).toHaveBeenCalled();
    expect(browserUtils.changeTitle).toHaveBeenCalledWith("Author");
  });

  it("should not change the document's title if there's no title to change", async () => {
    await router.push("/non-existant");

    expect(stringUtils.capitalize).not.toHaveBeenCalled();
    expect(browserUtils.changeTitle).not.toHaveBeenCalled();
  });

  /** Check that the routes with lazy loading actually have the component to load */

  it("should compute author's route", async () => {
    jest.spyOn(stringUtils, "capitalize").mockReturnValue("Author");
    jest.spyOn(browserUtils, "changeTitle");
    await router.replace("/author");
    await Vue.nextTick();
    expect(stringUtils.capitalize).toHaveBeenCalledWith("Author");
    expect(browserUtils.changeTitle).toHaveBeenCalledWith("Author");
  });

  it("should compute home's route", async () => {
    jest.spyOn(stringUtils, "capitalize").mockReturnValue("Home");
    jest.spyOn(browserUtils, "changeTitle");
    await router.replace("/home");
    await Vue.nextTick();
    expect(stringUtils.capitalize).toHaveBeenCalledWith("Home");
    expect(browserUtils.changeTitle).toHaveBeenCalledWith("Home");
  });

  it("should compute posts's route", async () => {
    jest.spyOn(stringUtils, "capitalize").mockReturnValue("Posts");
    jest.spyOn(browserUtils, "changeTitle");
    await router.replace("/posts");
    await Vue.nextTick();
    expect(stringUtils.capitalize).toHaveBeenCalledWith("Every post");
    expect(browserUtils.changeTitle).toHaveBeenCalledWith("Posts");
  });

  it("should compute post detail's route", async () => {
    await router.replace("/posts/1");
    await Vue.nextTick();
    expect(stringUtils.capitalize).not.toHaveBeenCalled();
    expect(browserUtils.changeTitle).not.toHaveBeenCalledWith();
  });

  it("should compute users's route", async () => {
    await router.replace("/users/1");
    await Vue.nextTick();
    expect(stringUtils.capitalize).not.toHaveBeenCalled();
    expect(browserUtils.changeTitle).not.toHaveBeenCalledWith();
  });

  it("should compute contacts's route", async () => {
    jest.spyOn(stringUtils, "capitalize").mockReturnValue("Contact form");
    jest.spyOn(browserUtils, "changeTitle");
    await router.replace("/contact");
    await Vue.nextTick();
    expect(stringUtils.capitalize).toHaveBeenCalledWith("Contact form");
    expect(browserUtils.changeTitle).toHaveBeenCalledWith("Contact form");
  });

  it("should not change the title without an existant and valid meta title prop", async () => {
    routeChangeTitle();
    routeChangeTitle({ path: "/home", name: "Posts", meta: { title: "" } });
    routeChangeTitle({ path: "/home", name: "Posts", meta: {} });

    expect(stringUtils.capitalize).not.toHaveBeenCalled();
    expect(browserUtils.changeTitle).not.toHaveBeenCalled();
  });
});
