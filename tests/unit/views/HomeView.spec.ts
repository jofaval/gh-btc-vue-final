// Vendors
import { mount } from "@vue/test-utils";
// Components
import HomeView from "@/views/HomeView.vue";

describe("HomeView", () => {
  it("should render properly", () => {
    const wrapper = mount(HomeView);
    expect(wrapper.find(".page__home").exists()).toBe(true);
  });
});
