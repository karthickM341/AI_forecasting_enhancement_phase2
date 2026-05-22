import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const generateForecast = async (data) => {
  try {
    const response = await axios.post(
      `${API_URL}/forecast`,
      data
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
