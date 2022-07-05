// Vendors
import axios from "axios";
import fs from "fs";
import path from "path";
// Services
import { getUsers } from "../users.services";
// Mocks
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Users service", () => {
  const usersMockPath = path.join(__dirname, "..", "__mocks__", "users.json");
  const usersMock = fs.readFileSync(usersMockPath, "utf8");

  it("should call the users endpoint", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      status: 200,
      data: usersMock,
    });

    const result = await getUsers();

    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
    expect(result).toEqual(usersMock);
  });

  it("should have a fallback for failing status", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      status: 500,
      data: false,
    });

    const result = await getUsers();
    expect(result).toEqual([]);
  });
});
