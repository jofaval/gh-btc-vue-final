// Vendors
import { shallowMount } from "@vue/test-utils";
// Components
import FormularyFieldset from "@/components/FormularyFieldset.vue";

describe("FormularyFieldset", () => {
  it("should render properly", () => {
    const wrapper = shallowMount(FormularyFieldset);
    expect(wrapper.find(".formulary__fieldset").exists()).toBe(true);
  });
});
