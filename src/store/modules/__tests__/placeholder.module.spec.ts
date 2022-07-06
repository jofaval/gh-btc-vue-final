// Mocked data
import {
  posts as mockedPosts,
  users as mockedUsers,
} from "@/../tests/utils/mocks";
// Store
import placeholderModule, {
  getters,
  mutations,
  PlaceholderStateType,
} from "../placeholder.module";

describe("Placeholder Module", () => {
  let state: PlaceholderStateType;

  beforeEach(() => {
    state = {
      posts: mockedPosts,
      users: mockedUsers,
    };
  });

  it("should not be null", () => {
    expect(placeholderModule).not.toBe(null);
  });

  it("should get posts", () => {
    expect(getters.posts(state)()).toEqual(state.posts);
  });

  it("should get post by id", () => {
    expect(getters.postById(state)(11)).toEqual(state.posts[10]);
  });

  it("should get users", () => {
    expect(getters.users(state)()).toEqual(state.users);
  });

  it("should get user by id", () => {
    expect(getters.userById(state)(2)).toEqual(state.users[1]);
  });

  it("should get user by post id", () => {
    expect(getters.userByPostId(state)(11)).toEqual(state.users[1]);
  });

  it("should  fallback if no user by post id was found", () => {
    expect(getters.userByPostId(state)(-1)).toEqual({});
  });

  it("should get posts by user", () => {
    expect(getters.postsByUser(state)(2).length).toBe(10);
  });

  it("should search", () => {
    const { posts, users } = getters.search(state)("a");
    expect(posts.length).toBe(3);
    expect(users.length).toBe(3);
  });

  it("should search by the post's body", () => {
    const { posts, users } = getters.search(state)(
      "dignissimos aperiam dolorem qui"
    );
    expect(posts.length).toBe(1);
    expect(users.length).toBe(0);
  });

  it("should search by the users's email", () => {
    const { posts, users } = getters.search(state)("Nathan@yesenia.net");
    expect(posts.length).toBe(0);
    expect(users.length).toBe(1);
  });

  it("should not search if no text was given, or it was empty", () => {
    const { posts, users } = getters.search(state)("");
    expect(posts.length).toBe(0);
    expect(users.length).toBe(0);
  });

  it("should load posts", () => {
    const post = mockedPosts[0];
    mutations.loadPosts(state, [post]);
    expect(state.posts).toEqual(
      expect.arrayContaining([expect.objectContaining(post)])
    );
  });

  it("should load users", () => {
    const user = mockedUsers[0];
    mutations.loadUsers(state, [user]);
    expect(state.users).toEqual(
      expect.arrayContaining([expect.objectContaining(user)])
    );
  });
});
