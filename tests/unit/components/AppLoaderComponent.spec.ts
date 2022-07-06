// Vendors
import { shallowMount } from "@vue/test-utils";
// Components
import AppLoaderComponent from "@/components/AppLoaderComponent.vue";

describe("AppLoaderComponent", () => {
  it("should render properly", () => {
    const wrapper = shallowMount(AppLoaderComponent);
    expect(wrapper.find(".loader").exists()).toBe(true);
  });
});
