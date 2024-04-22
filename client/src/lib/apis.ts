import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const api = {
  oAuthGoogle: async ({ accessToken }: { accessToken: string }) => {
    try {
      const res = await axios.post(`${BASE_URL}/public/oauth/google`, {
        accessToken: accessToken,
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  uploadVideo: async ({
    title,
    description,
    url,
    categories,
    token,
  }: {
    title: string;
    description: string;
    url: string;
    categories: string[];
    token: string;
  }) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/private/video/upload`,
        {
          title,
          description,
          url,
          categories,
        },
        {
          headers: {
            "learntok-auth-token": token,
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  getCategories: async () => {
    try {
      const res = await axios.get(`${BASE_URL}/public/categories`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

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
    recall,
  }: {
    email: string;
    password: string;
    username: string;
    fullName: string;
    recall: boolean;
  }) => {
    try {
      const res = await axios.post(`${BASE_URL}/public/auth/sign-up`, {
        email,
        fullName,
        password,
        username,
        recall,
      });

      return res.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },

  Login: async ({
    email,
    password,
    recall,
  }: {
    email: string;
    password: string;
    recall: boolean;
  }) => {
    try {
      const res = await axios.post(`${BASE_URL}/public/auth/sign-in`, {
        email,
        password,
        recall,
      });
      return res.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
};

export default api;
