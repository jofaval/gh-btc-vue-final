// Utilities
import { compare } from "@/utils/string.utils";
// Types
import type { PostType } from "@/types/post";
import type { UserType } from "@/types/user";

export type PlaceholderStateType = {
  posts: PostType[];
  users: UserType[];
};

export type PlaceholderSearchType = {
  posts: PostType[];
  users: UserType[];
};

export type PlaceholderGettersType = {
  posts: PostType[];
  postById: unknown;
  users: UserType[];
  userById: unknown;
  userByPostId: unknown;
  postsByUser: unknown;
  search: unknown;
};

export const getters = {
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
  userByPostId: (state: PlaceholderStateType) => (postId: number | string) => {
    const postIdNumber = Number(postId);
    const post = state.posts.find(({ id }) => id === postIdNumber);
    return !post ? {} : state.users.find(({ id }) => id === post.userId);
  },
  postsByUser: (state: PlaceholderStateType) => (userId: number | string) => {
    const userIdNumber = Number(userId);
    return state.posts.filter((post: PostType) => post.userId === userIdNumber);
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
};

export const mutations = {
  loadPosts(state: PlaceholderStateType, posts: PostType[]) {
    state.posts = posts;
  },
  loadUsers(state: PlaceholderStateType, users: UserType[]) {
    state.users = users;
  },
};

export default {
  state: {
    posts: [] as PostType[],
    users: [] as UserType[],
  },
  getters,
  mutations,
  actions: {},
  modules: {},
};
