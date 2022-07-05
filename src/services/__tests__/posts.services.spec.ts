// Vendors
import axios from "axios";
// Services
import { getPosts } from "../posts.services";
// Mocked data
import { posts } from "../../../tests/utils/mocks";
// Mocks
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Posts service", () => {
  it("should call the posts endpoint", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      status: 200,
      data: posts,
    });

    const result = await getPosts();

    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts"
    );
    expect(result).toEqual(posts);
  });

  it("should have a fallback for failing status", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      status: 500,
      data: false,
    });

    const result = await getPosts();
    expect(result).toEqual([]);
  });
});
