import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const api = {
  VerifyToken: async (token: string) => {
    try {
      const res = await axios.get(`${BASE_URL}/private/token/verify`, {
        headers: {
          "learntok-auth-token": token,
        },
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  getUserProfile: async ({ token }: { token: string }) => {
    try {
      const res = await axios.get(`${BASE_URL}/private/auth/profile`, {
        headers: {
          "learntok-auth-token": token,
        },
      });
      return res.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  getUserByID: async ({ id }: { id: string }) => {
    try {
      const res = await axios.get(`${BASE_URL}/public/user/${id}`);
      return res.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

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

  Register: async ({
    email,
    fullName,
    password,
    username,
  }: {
    email: string;
    password: string;
    username: string;
    fullName: string;
  }) => {
    try {
      const res = await axios.post(`${BASE_URL}/public/auth/sign-up`, {
        email,
        fullName,
        password,
        username,
      });
      return res.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  Login: async ({ email, password }: { email: string; password: string }) => {
    try {
      const res = await axios.post(`${BASE_URL}/public/auth/sign-in`, {
        email,
        password,
      });
      return res.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
};

export default api;
