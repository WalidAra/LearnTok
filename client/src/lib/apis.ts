import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const api = {
  getTrendingVideos: async () => {
    try {
      const res = await axios.get(`${BASE_URL}/public/trending`);
      return res.data;
    } catch (error: any) {
      console.error(error.message);
    }
  },

  getForYouVideos: async ({ token }: { token: string }) => {
    try {
      const res = await axios.get(`${BASE_URL}/private/for-you/`, {
        headers: {
          "learntok-auth-token": token,
        },
      });
      return res.data;
    } catch (error: any) {
      console.error(error.message);
    }
  },

  insertView: async ({
    token,
    video_id,
  }: {
    token: string;
    video_id: string;
  }) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/private/view/create`,
        {
          video_id,
        },
        {
          headers: {
            "learntok-auth-token": token,
          },
        }
      );
      return res.data;
    } catch (error: any) {
      console.error(error.message);
    }
  },

  videoSavedAsBookmark: async ({
    token,
    video_id,
  }: {
    token: string;
    video_id: string;
  }) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/private/bookmark/status`,
        { video_id },
        {
          headers: {
            "learntok-auth-token": token,
          },
        }
      );

      return res.data;
    } catch (error: any) {
      console.error(error.message);
    }
  },

  ToggleBookmark: async ({
    token,
    video_id,
  }: {
    token: string;
    video_id: string;
  }) => {
    try {
      const res = await axios.put(
        `${BASE_URL}/private/bookmark/toggle`,
        { video_id },
        {
          headers: {
            "learntok-auth-token": token,
          },
        }
      );
      return res.data;
    } catch (error: any) {
      console.error(error.message);
    }
  },

  ToggleLike: async ({
    token,
    video_id,
  }: {
    token: string;
    video_id: string;
  }) => {
    try {
      const res = await axios.put(
        `${BASE_URL}/private/like/toggle`,
        {
          video_id,
        },
        {
          headers: {
            "learntok-auth-token": token,
          },
        }
      );

      return res.data;
    } catch (error: any) {
      console.error(error.message);
    }
  },

  likeState: async ({
    token,
    video_id,
  }: {
    token: string;
    video_id: string;
  }) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/private/like/status`,
        {
          video_id,
        },
        {
          headers: {
            "learntok-auth-token": token,
          },
        }
      );

      return res.data;
    } catch (error: any) {
      console.error(error.message);
    }
  },

  getOtherUserVideos: async ({ user_id }: { user_id: string }) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/public/user/${user_id}/videos`,
        { page: 1 }
      );
      return res.data;
    } catch (error: any) {
      console.error(error.message);
    }
  },
  getClientFollowingVideos: async ({ token }: { token: string }) => {
    try {
      const res = await axios.get(`${BASE_URL}/private/video/following`, {
        headers: {
          "learntok-auth-token": token,
        },
      });

      return res.data;
    } catch (error: any) {
      console.error(error.message);
    }
  },

  tokenIdMatch: async ({
    token,
    user_id,
  }: {
    user_id: string;
    token: string;
  }) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/private/auth/match`,
        {
          user_id,
        },
        {
          headers: {
            "learntok-auth-token": token,
          },
        }
      );

      return res.data;
    } catch (error: any) {
      console.error(error.message);
    }
  },

  updateUserProfile: async ({
    token,
    bio,
    email,
    firstName,
    lastName,
    newPassword,
    username,
    pic,
  }: {
    token: string;
    bio?: string;
    confirmNewPassword?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    newPassword?: string;
    oldPassword?: string;
    username?: string;
    pic: string;
  }) => {
    try {
      const res = await axios.put(
        `${BASE_URL}/private/auth/update`,
        {
          bio,
          email,
          fullName: firstName + " " + lastName,
          password: newPassword,
          username,
          picture: pic,
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

  deleteProfile: async ({ token }: { token: string }) => {
    try {
      const res = await axios.delete(`${BASE_URL}/private/auth/delete`, {
        headers: {
          "learntok-auth-token": token,
        },
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  ToggleFollow: async ({
    token,
    user_id,
  }: {
    token: string;
    user_id: string;
  }) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/private/follow/toggle`,
        { user_id },
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

  followState: async ({
    token,
    user_id,
  }: {
    token: string;
    user_id: string;
  }) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/private/follow/check-following`,
        { user_id },
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
  createComment: async ({
    comment,
    token,
    video_id,
  }: {
    token: string;
    video_id: string;
    comment: string;
  }) => {
    try {
      const res = await axios.post(
        `${BASE_URL}/private/comment/create`,
        { comment, video_id },
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
  getVideoComments: async ({ video_id }: { video_id: string }) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/public/videos/${video_id}/comments`
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  getOtherUserFollowers: async ({ id }: { id: string }) => {
    try {
      const res = await axios.get(`${BASE_URL}/public/user/${id}/followers`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
  getOtherUserFollowings: async ({ id }: { id: string }) => {
    try {
      const res = await axios.get(`${BASE_URL}/public/user/${id}/followings`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  searchUsers: async ({ name }: { name: string }) => {
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
  getUserFollowings: async ({ user_id }: { user_id: string }) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/public/user/${user_id}/followings`
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
  getUserFollowers: async ({ user_id }: { user_id: string }) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/public/user/${user_id}/followers`
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
  getClientFollowings: async ({ token }: { token: string }) => {
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
  getClientFollowers: async ({ token }: { token: string }) => {
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
      return {
        status: false,
        message: "Internal Server Error",
        data: null,
      };
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
