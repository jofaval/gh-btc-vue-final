// Vendors
import { shallowMount } from "@vue/test-utils";
// Components
import FooterComponent from "@/components/FooterComponent.vue";

describe("FooterComponent", () => {
  it("should render properly", () => {
    const wrapper = shallowMount(FooterComponent);
    expect(wrapper.find(".footer#footer.footer").exists()).toBe(true);
  });
});
