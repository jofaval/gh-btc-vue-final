// Constants
import servicesConstants from "@/constants/services.constants";
// Utilities
import { isResponseSuccess, get } from "@/utils/service.utils";
// Types
import type { PostType } from "@/types/post";

const { BASE_URL, ENDPOINTS } = servicesConstants;
export const POSTS_URL = `${BASE_URL}${ENDPOINTS.POSTS}`;

/**
 * Retrieves the posts of the application
 * @returns All of the posts for the application
 */
export const getPosts = async (): Promise<PostType[]> => {
  const response = await get(POSTS_URL);

  if (isResponseSuccess(response)) {
    return response.data;
  }

  return [];
};

export default POSTS_URL;
