import Client from "./api";
import axios from "axios";

export const GetBootcampList = async () => {
  try {
    let response = await axios.get("http://localhost:3001/api/bootcamps");
    return response.data;
  } catch (error) {
    throw error;
  }
};
