// Vendors
import axios, { AxiosResponse } from "axios";

/**
 * Was the given response a successful one?
 * @param response The axios response to evaluate
 * @returns If it was a successful HTTP request
 */
export const isResponseSuccess = (response: AxiosResponse): boolean =>
  response.status >= 200 && response.status < 300;

/**
 * Gets the response value from a URL
 * @param url The location to be fetched
 * @param defaultValue What will be the value in case the request fails
 * @returns Either the response value or the error
 */
export const get = async (
  url: string,
  defaultValue: unknown = null
): Promise<AxiosResponse> => {
  let response: AxiosResponse;

  try {
    response = await axios.get(url);
  } catch (error) {
    response = { status: 400, data: defaultValue } as AxiosResponse;
  }

  return response;
};

export default { isResponseSuccess };
