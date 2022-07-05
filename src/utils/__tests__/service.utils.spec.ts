// Vendors
import { AxiosResponse } from "axios";
// Utilities
import { isResponseSuccess } from "../service.utils";

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
});
