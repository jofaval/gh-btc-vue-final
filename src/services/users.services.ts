// Constants
import servicesConstants from "@/constants/services.constants";
// Utilities
import { get, isResponseSuccess } from "@/utils/service.utils";
// Types
import type { UserType } from "@/types/user";

const { BASE_URL, ENDPOINTS } = servicesConstants;
export const USERS_URL = `${BASE_URL}${ENDPOINTS.USERS}`;

/**
 * Retrieves all of the users of the application
 * @returns All of the users for the application
 */
export const getUsers = async (): Promise<UserType[]> => {
  const response = await get(USERS_URL);

  if (isResponseSuccess(response)) {
    return response.data;
  }

  return [];
};

export default USERS_URL;
