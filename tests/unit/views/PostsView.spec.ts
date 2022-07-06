// Vendors
import { mount } from "@vue/test-utils";
// Components
import PostsView from "@/views/PostsView.vue";

describe("PostsView", () => {
  it("should render properly", () => {
    const wrapper = mount(PostsView);
    expect(wrapper.find(".page__posts").exists()).toBe(true);
  });
});
