// Vendors
import { shallowMount } from "@vue/test-utils";
// Components
import AuthorBiography from "@/components/AuthorBiography.vue";

describe("AuthorBiography", () => {
  it("should render properly", () => {
    const wrapper = shallowMount(AuthorBiography, {
      propsData: { bio: "Hello World!" },
    });
    const paragraph = wrapper.find("p");
    expect(paragraph.exists()).toBe(true);
    expect(paragraph.text()).toMatch("Hello World!");
  });
});
