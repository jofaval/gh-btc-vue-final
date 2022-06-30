import { shallowMount } from "@vue/test-utils";
import AuthorBiography from "@/components/AuthorBiography.vue";

test("AuthorBiography", () => {
  const wrapper = shallowMount(AuthorBiography, {
    propsData: { bio: "Hello World!" },
  });
  const paragraph = wrapper.find("p");
  expect(paragraph.exists()).toBe(true);
  expect(paragraph.text()).toMatch("Hello World!");
});
