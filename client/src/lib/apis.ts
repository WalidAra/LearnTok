import axios from "axios";
const BASE_URL = process.env.NEXT_BASE_URL;

const api = {
  getVideos: async () => {
    try {
      const res = await axios.post(`${BASE_URL}/public/videos`, {
        page: 0,
      });
      return res.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
};

export default api;
