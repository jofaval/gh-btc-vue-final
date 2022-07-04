// Vendors
import { mount } from "@vue/test-utils";
// Components
import AuthorComponent from "@/components/AuthorComponent.vue";

describe("AuthorComponent", () => {
  it("should render properly", () => {
    const wrapper = mount(AuthorComponent);
    const author = wrapper.find(".author");
    expect(author.exists()).toBe(true);
    expect(author.find(".author__profile").exists()).toBe(true);
    expect(author.find(".author__biography").exists()).toBe(true);
  });
});
