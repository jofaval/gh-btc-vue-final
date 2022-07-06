// Vendors
import { mount } from "@vue/test-utils";
// Components
import ContactView from "@/views/ContactView.vue";

describe("ContactView", () => {
  it("should render properly", () => {
    const wrapper = mount(ContactView);
    expect(wrapper.find(".page__contact").exists()).toBe(true);
  });
});
