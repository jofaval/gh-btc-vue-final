// Vendors
import { mount, shallowMount } from "@vue/test-utils";
// Components
import PostDetailComponent from "@/components/PostDetailComponent.vue";

describe("PostDetailComponent", () => {
  const post = {
    id: 1,
    userId: 1,
    title: "Lorem ipsum",
    body: "dolor sit amet",
  };

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
    const wrapper = shallowMount(PostDetailComponent, {
      propsData: {
        post,
        user,
      },
    });
    expect(wrapper.find(".post-detail").exists()).toBe(true);
    expect(wrapper.find(".post-detail__title").text()).toBe(post.title);
    expect(wrapper.find(".post-detail__body").text()).toBe(post.body);
  });

  it("should render without errors if the values are void", () => {
    expect(() => {
      mount(PostDetailComponent, {
        propsData: {
          post: {},
          user: {},
        },
      });
    }).not.toThrowError();
  });
});
