// Vendors
import { shallowMount } from "@vue/test-utils";
// Components
import NavbarComponent from "@/components/NavbarComponent.vue";

describe("NavbarComponent", () => {
  it("should render properly", () => {
    const wrapper = shallowMount(NavbarComponent);
    expect(wrapper.find(".router__navbar").exists()).toBe(true);
  });
});
