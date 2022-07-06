// Vendors
import { mount } from "@vue/test-utils";
// Components
import PostDetailView from "@/views/PostDetailView.vue";
// Mocked data
import { posts, users } from "../../utils/mocks";
// Mocks
jest.mock("@/store", () => ({
  getters: {
    postById: () => posts[0],
    userByPostId: () => users[0],
  },
}));

describe("PostDetailView", () => {
  beforeEach(() => {
    // jest.clearAllMocks();
    // jest.spyOn(store.getters, "postById").mockReturnValue(posts[0]);
    // jest.spyOn(store.getters, "userByPostId").mockReturnValue(users[0]);
  });

  const mockRoute = {
    params: {
      postId: 1,
    },
  };

  const mockRouter = {
    push: jest.fn(),
  };

  it("should render properly", async () => {
    jest.mock("@/store", () => ({
      getters: {
        postById: () => posts[0],
        userByPostId: () => users[0],
      },
    }));
    const wrapper = mount(PostDetailView, {
      mocks: {
        $route: mockRoute,
        $router: mockRouter,
      },
    });
    await wrapper.vm.$nextTick();
    wrapper.setData({
      post: posts[0],
      user: users[0],
    });
    expect(wrapper.find(".page__post-detail").exists()).toBe(true);
  });

  it("should not render properly", async () => {
    jest.mock("@/store", () => ({
      getters: {
        postById: () => ({}),
        userByPostId: () => ({}),
      },
    }));
    const wrapper = mount(PostDetailView, {
      mocks: {
        $route: mockRoute,
        $router: mockRouter,
      },
    });
    await wrapper.vm.$nextTick();
    wrapper.setData({
      post: {},
      user: {},
    });
    expect(wrapper.find(".page__post-detail").exists()).toBe(true);
  });
});
