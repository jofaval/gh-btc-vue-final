// Vendors
import { mount } from "@vue/test-utils";
// Components
import AuthorView from "@/views/AuthorView.vue";

describe("AuthorView", () => {
  it("should render properly", () => {
    const wrapper = mount(AuthorView);
    expect(wrapper.find(".page__author").exists()).toBe(true);
    expect(wrapper.find(".author").exists()).toBe(true);
  });
});
