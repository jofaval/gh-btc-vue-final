// Vendors
import axios from "axios";
// Constants
import servicesConstants from "@/constants/services.constants";
// Types
import type { PostType } from "@/types/post";

const { BASE_URL, ENDPOINTS } = servicesConstants;
export const POSTS_URL = `${BASE_URL}${ENDPOINTS.POSTS}`;

export const getPosts = async (): Promise<PostType[]> => {
  const response = await axios.get(POSTS_URL);

  return response?.data ?? [];
};

export default POSTS_URL;
