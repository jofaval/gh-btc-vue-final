import { AxiosResponse } from "axios";

/**
 * Was the given response a successful one?
 * @param response The axios response to evaluate
 * @returns If it was a successful HTTP request
 */
export const isResponseSuccess = (response: AxiosResponse): boolean =>
  response.status >= 200 && response.status < 300;

export default { isResponseSuccess };
