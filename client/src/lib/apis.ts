import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const api = {
  searchUsers: async ({name}:{name:string}) => {
 try {
   const res = await axios.post(`${BASE_URL}/public/user/search`, {
     name,
   });
   return res.data;
 } catch (error) {
   console.log(error);
 }
  },

  searchVideos: async ({ title }: { title: string }) => {
    try {
      const res = await axios.post(`${BASE_URL}/public/videos/search`, {
        title,
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  getVideoByID: async ({ video_id }: { video_id: string }) => {
    try {
      const res = await axios.get(`${BASE_URL}/public/videos/${video_id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  getUserBookmarks: async ({ token }: { token: string }) => {
    try {
      const res = await axios.get(`${BASE_URL}/private/auth/bookmarks`, {
        headers: {
          "learntok-auth-token": token,
        },
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  getStatusByID: async ({ status_id }: { status_id: string }) => {
    try {
      const res = await axios.get(`${BASE_URL}/public/statuses/${status_id}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
  getUserFollowings: async ({ token }: { token: string }) => {
    try {
      const res = await axios.get(`${BASE_URL}/private/auth/followings`, {
        headers: {
          "learntok-auth-token": token,
        },
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
  getUserFollowers: async ({ token }: { token: string }) => {
    try {
      const res = await axios.get(`${BASE_URL}/private/auth/followers`, {
        headers: {
          "learntok-auth-token": token,
        },
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
  getUserLikedVideos: async ({ token }: { token: string }) => {
    try {
      const res = await axios.get(`${BASE_URL}/private/auth/likedVideos`, {
        headers: {
          "learntok-auth-token": token,
        },
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  getUserCreatedVideos: async ({ token }: { token: string }) => {
    try {
      const res = await axios.get(`${BASE_URL}/private/auth/videos`, {
        headers: {
          "learntok-auth-token": token,
        },
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
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
