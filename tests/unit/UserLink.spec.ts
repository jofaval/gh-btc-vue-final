// Vendors
import { shallowMount } from "@vue/test-utils";
// Components
import UserLink from "@/components/UserLink.vue";

describe("UserLink", () => {
  const user = {
    id: 1,
    name: "Pepe Fabra Valverde",
    username: "jofaval",
    email: "contact@github.com",
    address: {
      street: "Unkown",
      suite: "Unkown",
      city: "Valencia",
      zipcode: "Unkown",
      geo: {
        lat: "Unkown",
        lng: "Unkown",
      },
    },
    phone: "Unkown",
    website: "https://github.com/jofaval",
    company: {
      name: "Unkown",
      catchPhrase: "Unkown",
      bs: "Unkown",
    },
  };

  it("should render properly", () => {
    const wrapper = shallowMount(UserLink, {
      propsData: {
        user,
      },
    });
    expect(wrapper.find("router-link.user__link").exists()).toBe(true);
  });

  it("should render with the short attribute", () => {
    const wrapper = shallowMount(UserLink, {
      propsData: {
        user,
        short: true,
      },
    });
    expect(wrapper.find("router-link.user__link.short").exists()).toBe(true);
  });
});
