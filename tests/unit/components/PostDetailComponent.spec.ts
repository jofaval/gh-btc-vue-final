// Vendors
import { mount, shallowMount } from "@vue/test-utils";
// Components
import PostDetailComponent from "@/components/PostDetailComponent.vue";
// Mocked data
import { posts, users } from "../../utils/mocks";

describe("PostDetailComponent", () => {
  const post = posts[0];
  const user = users[0];

  it("should render properly", () => {
    const wrapper = mount(PostDetailComponent, {
      propsData: {
        post,
        user,
      },
    });
    expect(wrapper.find(".post-detail").exists()).toBe(true);
    expect(wrapper.find(".post-detail__title").exists()).toBe(true);
    expect(wrapper.find(".post-detail__title").text()).toBe(post.title);

    expect(wrapper.find(".post-detail__body").exists()).toBe(true);
    expect(wrapper.find(".post-detail__body").text()).toBe(post.body);

    expect(wrapper.find(".post-detail__author").exists()).toBe(true);
    expect(wrapper.find(".post-detail__author").text()).toBe(
      `Created by: ${user.name}`
    );
  });

  it("should render without errors if the values are void", async () => {
    const wrapper = shallowMount(PostDetailComponent, {
      propsData: {
        post: {},
        user: {},
      },
    });
    wrapper.setData({ show: false });
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".post-detail").exists()).toBe(false);
    expect(wrapper.find(".post-detail__title").exists()).toBe(false);
    expect(wrapper.find(".post-detail__body").exists()).toBe(false);
    expect(wrapper.find(".post-detail__author").exists()).toBe(false);
  });

  it("should render without errors if the user was not given", async () => {
    const wrapper = shallowMount(PostDetailComponent, {
      propsData: {
        post,
        user: {},
      },
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".post-detail").exists()).toBe(true);
    expect(wrapper.find(".post-detail__title").isVisible()).toBe(true);
    expect(wrapper.find(".user__link").exists()).toBe(false);
  });
});
