// Vendors
import axios from "axios";
// Constants
import servicesConstants from "@/constants/services.constants";
// Types
import type { UserType } from "types/user";

const { BASE_URL, ENDPOINTS } = servicesConstants;
export const USERS_URL = `${BASE_URL}${ENDPOINTS.USERS}`;

export const getUsers = async (): Promise<UserType[]> => {
  const response = await axios.get(USERS_URL);

  return response?.data ?? [];
};

export default USERS_URL;
