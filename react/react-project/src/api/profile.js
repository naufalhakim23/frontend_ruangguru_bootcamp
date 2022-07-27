// TODO: answer here
import axios from "axios";
import { API_URL } from "./config";
export const getProfileDetail = async (userId) => {
  try {
    const response = await axios({
      method: "get",
      url: `${API_URL}/profile/${userId}`,
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
