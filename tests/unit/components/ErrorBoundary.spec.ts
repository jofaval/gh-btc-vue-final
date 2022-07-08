// Vendors
import { mount } from "@vue/test-utils";
// Components
import ErrorBoundary from "@/components/ErrorBoundary.vue";

describe("ErrorBoundary", () => {
  it("should show the intended component", () => {
    const wrapper = mount(ErrorBoundary);
    expect(wrapper.find(".error-boundary--success").exists()).toBe(true);
    expect(wrapper.find(".error-boundary--failure").exists()).toBe(false);
  });

  it("should not show the component, but an error message instead", () => {
    const wrapper = mount(ErrorBoundary, {
      data() {
        return { error: true };
      },
    });
    expect(wrapper.find(".error-boundary--success").exists()).toBe(false);
    expect(wrapper.find(".error-boundary--failure").exists()).toBe(true);
  });
});
