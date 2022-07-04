// Vendors
import { shallowMount } from "@vue/test-utils";
// Components
import PostDetailLink from "@/components/PostDetailLink.vue";

describe("PostDetailLink", () => {
  const post = {
    id: 1,
    userId: 1,
    title: "Lorem ipsum",
    body: "dolor sit amet",
  };

  it("should render properly", () => {
    const wrapper = shallowMount(PostDetailLink, {
      propsData: {
        post,
      },
    });
    expect(wrapper.find("router-link.post-detail__link").exists()).toBe(true);
  });

  it("should render with the short attribute", () => {
    const wrapper = shallowMount(PostDetailLink, {
      propsData: {
        post,
        short: true,
      },
    });
    expect(wrapper.find("router-link.post-detail__link.short").exists()).toBe(
      true
    );
  });
});
