// Vendors
import Vue from "vue";
import { mount } from "@vue/test-utils";
// Components
import App from "@/App.vue";
// Services
import * as postsServices from "@/services/posts.services";
import * as usersServices from "@/services/users.services";
// Mocked data
import { posts, users } from "@/../tests/utils/mocks";
// Mocks
jest.mock("@/services/posts.services");

describe("App", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    jest.spyOn(postsServices, "getPosts").mockResolvedValue(posts);
    jest.spyOn(usersServices, "getUsers").mockResolvedValue(users);
  });

  it("should render properly", async () => {
    const wrapper = mount(App);
    wrapper.setData({ loaded: true, posts, users });
    await Vue.nextTick();
    expect(wrapper.find("div#app.app").exists()).toBe(true);
    expect(wrapper.find(".app__content").exists()).toBe(true);
  });

  it("should not render whilst loading", async () => {
    const wrapper = mount(App);
    wrapper.setData({ loaded: false });
    await Vue.nextTick();
    expect(wrapper.find("div#app.app").exists()).toBe(true);
    expect(wrapper.find(".app__content").exists()).toBe(false);
    expect(wrapper.find(".loader").exists()).toBe(true);
  });
});
