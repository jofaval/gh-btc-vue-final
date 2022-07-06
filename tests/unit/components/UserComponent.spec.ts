// Vendors
import { shallowMount } from "@vue/test-utils";
// Components
import UserComponent from "@/components/UserComponent.vue";
// Mocked data
import { posts, users } from "../../utils/mocks";

describe("UserComponent", () => {
  it("should not render by default", () => {
    const wrapper = shallowMount(UserComponent, {
      propsData: {
        posts: [],
        user: {},
      },
      data() {
        return { show: false };
      },
    });
    expect(wrapper.find(".user").exists()).toBe(false);
  });

  it("should render properly", async () => {
    const wrapper = shallowMount(UserComponent, {
      propsData: {
        user: users[0],
        posts: posts.slice(0, 11),
      },
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".user").exists()).toBe(true);
  });
});
