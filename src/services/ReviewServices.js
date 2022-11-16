import Client from "./api";

export const PostReview = async (userId, bootcampId, data) => {
  try {
    const res = await Client.post(`/api/reviews/${userId}/${bootcampId}`, data);
    return res.data;
  } catch (error) {
    throw error;
  }
};
