// Vendors
import { mount, shallowMount } from "@vue/test-utils";
// Components
import BaseButton from "@/components/BaseButton.vue";

describe("BaseButton", () => {
  it("should render properly", () => {
    const wrapper = shallowMount(BaseButton);
    expect(wrapper.find(".base-button__container").exists()).toBe(true);
    const baseButton = wrapper.find(".base-button");
    expect(baseButton.exists()).toBe(true);
    expect(baseButton.attributes("type")).toBe("submit");
  });

  it("should render as disabled", () => {
    const wrapper = mount(BaseButton, {
      propsData: {
        disabled: true,
      },
    });
    expect(wrapper.find(".base-button").attributes("disabled")).toBe("true");
  });
});
