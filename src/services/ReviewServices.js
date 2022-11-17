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

export const UpdateReview = async (reviewId, data) => {
  try {
    const res = await Client.put(`/api/reviews/${reviewId}`, data);
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

export const GetAllowToCreateReview = async (userId, bootcampId) => {
  try {
    let response = await axios.get(
      `http://localhost:3001/api/reviews/check/${userId}/${bootcampId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const DeleteReview = async (userId, reviewId) => {
  try {
    const res = await Client.delete(`/api/reviews/${userId}/${reviewId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
