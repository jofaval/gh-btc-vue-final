// Vendors
import axios, { AxiosResponse } from "axios";
// Utilities
import { get, isResponseSuccess } from "../service.utils";

describe("Services utilities", () => {
  it("should flag the response as successful", () => {
    const response = {
      status: 200,
    } as AxiosResponse;
    expect(isResponseSuccess(response)).toBe(true);
  });

  it("should flag the response as failed", () => {
    const response = {
      status: 500,
    } as AxiosResponse;
    expect(isResponseSuccess(response)).toBe(false);
  });

  it("should get a response", async () => {
    jest.spyOn(axios, "get").mockResolvedValue({
      status: 200,
      data: expect.any(Array),
    });

    expect(await get("https://jsonplaceholder.typicode.com/posts")).toEqual(
      expect.objectContaining({
        status: 200,
        data: expect.any(Array),
      })
    );
  });

  it("should catch the error while trying to get a response", async () => {
    jest.spyOn(axios, "get").mockImplementationOnce(() => {
      throw new Error("test");
    });

    expect(await get("https://jsonplaceholder.typicode.com/posts")).toEqual(
      expect.objectContaining({
        status: 400,
        data: null,
      })
    );
  });
});
