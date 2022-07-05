// Vendors
import fs from "fs";
import path from "path";
// Types
import type { PostType } from "@/types/post";
import type { UserType } from "@/types/user";

const serviceMocksBasePath = path.join(
  __dirname,
  "..",
  "..",
  "src",
  "services",
  "__mocks__"
);

const postsMockPath = path.join(serviceMocksBasePath, "posts.json");
export const posts: PostType[] = JSON.parse(
  fs.readFileSync(postsMockPath, "utf8")
);

const usersMockPath = path.join(serviceMocksBasePath, "users.json");
export const users: UserType[] = JSON.parse(
  fs.readFileSync(usersMockPath, "utf8")
);

export default { posts, users };
