// Vendors
import { shallowMount } from "@vue/test-utils";
// Components
import NavbarSearchbarResults from "@/components/NavbarSearchbarResults.vue";
// Mocked data
import { posts, users } from "@/../tests/utils/mocks";

describe("NavbarSearchbarResults", () => {
  it("should render properly", () => {
    const wrapper = shallowMount(NavbarSearchbarResults, {
      propsData: {
        results: {
          posts,
          users,
        },
      },
    });
    expect(wrapper.find(".navbar__searchbar__results").exists()).toBe(true);
    expect(wrapper.find(".navbar__searchbar__results__posts").exists()).toBe(
      true
    );
    expect(wrapper.find(".navbar__searchbar__results__users").exists()).toBe(
      true
    );
  });

  it("should not render properly", () => {
    const wrapper = shallowMount(NavbarSearchbarResults, {
      propsData: {
        results: {
          posts: [],
          users: [],
        },
      },
    });
    expect(wrapper.find("navbar__searchbar__results").exists()).toBe(false);
  });
});
