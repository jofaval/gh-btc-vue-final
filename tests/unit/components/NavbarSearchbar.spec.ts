// Vendors
import { mount, shallowMount } from "@vue/test-utils";
// Components
import NavbarSearchbar from "@/components/NavbarSearchbar.vue";
import Vue from "vue";

describe("NavbarSearchbar", () => {
  it("should render properly", () => {
    const wrapper = shallowMount(NavbarSearchbar);
    expect(wrapper.find(".navbar__searchbar").exists()).toBe(true);
    expect(wrapper.find(".navbar__searchbar__results").exists()).toBe(false);
  });

  it("should show the results", async () => {
    const wrapper = mount(NavbarSearchbar);
    wrapper.setData({
      showResults: true,
      searched: "Empty",
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".navbar__searchbar").exists()).toBe(true);
    expect(wrapper.find(".navbar__searchbar__results").exists()).toBe(true);
    // expect(wrapper.find(".navbar__searchbar").html()).toBe("Empty");
  });
});
