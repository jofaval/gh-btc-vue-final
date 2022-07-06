// Vendors
import { shallowMount } from "@vue/test-utils";
// Components
import FormularyInput from "@/components/FormularyInput.vue";

describe("FormularyInput", () => {
  it("should render properly", () => {
    const wrapper = shallowMount(FormularyInput);
    expect(wrapper.find(".formulary__input").exists()).toBe(true);
  });
});
