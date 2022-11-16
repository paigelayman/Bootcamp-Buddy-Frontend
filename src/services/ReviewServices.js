import Client from "./api";
import axios from "axios";

export const PostReview = async (userId, bootcampId, data) => {
  try {
    const res = await Client.post(`/api/reviews/${userId}/${bootcampId}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const GetReview = async (bootcampId) => {
  try {
    let response = await axios.get(
      `http://localhost:3001/api/reviews/${bootcampId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
