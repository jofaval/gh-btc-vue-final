// Utilities
import { compare } from "@/utils/string.utils";
// Types
import type { PostType } from "@/types/post";
import type { UserType } from "@/types/user";

type PlaceholderStateType = {
  posts: PostType[];
  users: UserType[];
};

export type PlaceholderSearchType = {
  posts: PostType[];
  users: UserType[];
};

type PlaceholderGettersType = {
  posts: PostType[];
  postById: CallableFunction;
  users: UserType[];
  userById: CallableFunction;
  userByPostId: CallableFunction;
  postsByUser: CallableFunction;
  search: CallableFunction;
};

export default {
  state: {
    posts: [] as PostType[],
    users: [] as UserType[],
  },
  getters: {
    posts: (state: PlaceholderStateType) => () => state.posts,
    postById: (state: PlaceholderStateType) => (postId: number | string) => {
      const postIdNumber = Number(postId);
      return state.posts.find(({ id }) => id === postIdNumber);
    },
    users: (state: PlaceholderStateType) => () => state.users,
    userById: (state: PlaceholderStateType) => (userId: number | string) => {
      const userIdNumber = Number(userId);
      return state.users.find(({ id }) => id === userIdNumber);
    },
    userByPostId:
      (state: PlaceholderStateType, getters: PlaceholderGettersType) =>
      (postId: number) => {
        const post = getters.postById(postId);
        const { userId } = post;

        return state.users.find(({ id }) => id === userId);
      },
    postsByUser: (state: PlaceholderStateType) => (userId: number | string) => {
      const userIdNumber = Number(userId);
      return state.posts.filter(
        (post: PostType) => post.userId === userIdNumber
      );
    },
    search:
      (state: PlaceholderStateType) =>
      (text: string, limit = 3): PlaceholderSearchType => {
        if (!text) {
          return { posts: [], users: [] };
        }

        const { posts, users } = state;

        const matchedPosts = posts
          .filter(
            ({ title, body }) =>
              compare({ first: title, second: text, contains: true }) ||
              compare({ first: body, second: text, contains: true })
          )
          .slice(0, limit) as PostType[];

        const matchedUsers = users
          .filter(
            ({ name, username, email }) =>
              compare({ first: name, second: text, contains: true }) ||
              compare({ first: username, second: text, contains: true }) ||
              compare({ first: email, second: text, contains: true })
          )
          .slice(0, limit) as UserType[];

        const results = { posts: matchedPosts, users: matchedUsers };

        return results;
      },
  },
  mutations: {
    loadPosts(state: PlaceholderStateType, posts: PostType[]) {
      state.posts = posts;
    },
    loadUsers(state: PlaceholderStateType, users: UserType[]) {
      state.users = users;
    },
  },
  actions: {},
  modules: {},
};
