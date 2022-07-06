// Vendors
import { shallowMount } from "@vue/test-utils";
// Components
import NavbarThemeToggler from "@/components/NavbarThemeToggler.vue";

describe("NavbarThemeToggler", () => {
  it("should render properly", () => {
    const wrapper = shallowMount(NavbarThemeToggler);
    expect(wrapper.find(".theme-toggler__container").exists()).toBe(true);
  });
});
