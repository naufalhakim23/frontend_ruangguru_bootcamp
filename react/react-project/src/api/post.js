// TODO: answer here
import axios from "axios";
import { API_URL } from "./config";
export const getPostList = async () => {
  try {
    const response = await axios({
      method: "get",
      url: `${API_URL}/post/list`,
      withCredentials: true,
    });
    return response?.data.data;
  } catch (error) {
    console.log(error);
  }
};
export const pushPostWithImage = async (content, image) => {
  const formData = new FormData();
  formData.append("content", content);
  formData.append("image", image);
  try {
    const response = await axios.post(`${API_URL}/post/create`, formData, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const likePost = async (postId, type) => {
  try {
    const response = await axios({
      method: "get",
      url: `${API_URL}/post/${postId}/${type}`,
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getPostDetail = async (postId) => {
  try {
    const response = await axios({
      method: "get",
      url: `${API_URL}/post/${postId}`,
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
