// Vendors
import { shallowMount } from "@vue/test-utils";
// Components
import FormularyComponent from "@/components/FormularyComponent.vue";

describe("FormularyComponent", () => {
  it("should render properly", () => {
    const wrapper = shallowMount(FormularyComponent);
    wrapper.vm.$nextTick();
    expect(wrapper.find(".formulary").exists()).toBe(true);
  });

  it("should not render", () => {
    const wrapper = shallowMount(FormularyComponent, {
      data() {
        return {
          show: false,
        };
      },
    });
    expect(wrapper.find(".formulary").exists()).toBe(false);
  });
});
