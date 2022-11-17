import Client from "./api";

export const JoinBootcamp = async (bootcampId) => {
  try {
    const res = await Client.post(`/api//userbootcamps/${bootcampId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
