// Vendors
import { shallowMount } from "@vue/test-utils";
// Components
import AuthorProfile from "@/components/AuthorProfile.vue";

describe("AuthorProfile", () => {
  it("should render properly", () => {
    const wrapper = shallowMount(AuthorProfile);
    expect(wrapper.find(".author__profile").exists()).toBe(true);
    const paragraph = wrapper.find("img.author__profile__img");
    expect(paragraph.exists()).toBe(true);
    expect(paragraph.attributes()).toEqual(
      expect.objectContaining({
        alt: "Author profile image",
        class: "author__profile__img",
        src: "@/assets/jofaval.jpg",
        title: "Author profile image",
      })
    );
  });
});
