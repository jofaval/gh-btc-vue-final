// Vendors
import { shallowMount } from "@vue/test-utils";
// Components
import PostsComponent from "@/components/PostsComponent.vue";
// Mocked data
import { posts } from "@/../tests/utils/mocks";

describe("PostsComponent", () => {
  it("should render properly", () => {
    const wrapper = shallowMount(PostsComponent, {
      propsData: {
        posts,
      },
    });
    expect(wrapper.find(".posts").exists()).toBe(true);
  });
});
