// Vendors
import { shallowMount } from "@vue/test-utils";
// Components
import UserView from "@/views/UserView.vue";
// Mocked data
import { posts, users } from "../../utils/mocks";
// Mocks
jest.mock("@/store", () => ({
  getters: {
    userById: () => Promise.resolve(users[0]),
    postsByUser: () => Promise.resolve(posts.slice(0, 10)),
  },
}));

describe("UserView", () => {
  const mockRoute = {
    params: {
      userId: 1,
    },
  };

  const mockRouter = {
    push: jest.fn(),
  };

  const routerMocks = {
    $route: mockRoute,
    $router: mockRouter,
  };

  it("should render properly", async () => {
    jest.mock("@/store", () => ({
      getters: {
        userById: () => users[0],
        postsByUser: () => posts.slice(0, 10),
      },
    }));
    const wrapper = shallowMount(UserView, {
      mocks: { ...routerMocks },
    });
    wrapper.setData({
      user: users[0],
      posts: posts.slice(0, 10),
      show: true,
    });

    expect(wrapper.find(".page__user").exists()).toBe(true);
    expect(wrapper.vm.$data.show).toBe(true);
    expect(wrapper.vm.$data.user).toEqual(users[0]);
  });

  it("should not render without data", async () => {
    jest.mock("@/store", () => ({
      getters: {
        userById: () => users[0],
        postsByUser: () => [],
      },
    }));
    const wrapper = shallowMount(UserView, {
      mocks: { ...routerMocks },
    });
    await wrapper.vm.$nextTick();
    wrapper.setData({ show: false });
    expect(wrapper.find(".page__user").exists()).toBe(false);
    expect(wrapper.find(".user").exists()).toBe(false);
  });

  it("should not expect any prop at all", () => {
    const wrapper = shallowMount(UserView, {
      mocks: { ...routerMocks },
    });

    expect(wrapper.vm.$props).toBeUndefined();
  });
});
