const prisma = require("../../config/prisma");
const DetectOffense = require("../../helpers/isItOffended");
const CategoryModel = require("../../models/Category/category.model");
const StatusModel = require("../../models/status/status.model");
const videoModel = require("../../models/video/video.model");

const Video = {
  getTrendingVideos: async (req, res) => {
    try {
      const trendingVideos = await prisma.video.findMany({
        orderBy: [{ likes_count: "desc" }, { views_count: "desc" }],
        take: 10,
      });

      console.log("====================================");
      console.log(trendingVideos);
      console.log("====================================");

      return res.status(200).json({
        status: true,
        message: "Fetched trending videos",
        data: trendingVideos,
      });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({
        status: false,
        message: "Internal Server Error",
        data: null,
      });
    }
  },

  getUserFollowingVideos: async (req, res) => {
    const { id } = req.user;

    try {
      const clientFollowings = await prisma.follow.findMany({
        where: {
          client_id: id,
        },
      });
      const followingIds = clientFollowings.map(
        (following) => following.user_id
      );

      console.log("====================================");
      console.log(clientFollowings, followingIds);
      const videos = await prisma.video.findMany({
        where: {
          user_id: { in: followingIds },
        },
      });

      console.log("====================================");
      return res.status(200).json({
        status: true,
        message: "Fetched following videos",
        data: videos,
      });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({
        status: false,
        message: "Internal Server Error",
        data: null,
      });
    }
  },
  searchVideos: async (req, res) => {
    const { title } = req.body;
    try {
      const videos = await prisma.video.findMany({
        where: {
          title: {
            contains: title,
            mode: "insensitive",
          },
        },
      });

      return res.status(200).json({
        status: true,
        message: "Fetched videos based on search",
        data: videos,
      });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({
        status: false,
        message: "Internal Server Error",
        data: null,
      });
    }
  },

  updateVideo: async (req, res) => {
    const { video_id, ...restProps } = req.body;

    try {
      const currentVideo = await prisma.video.findUnique({
        where: {
          id: video_id,
        },
      });
      const temp = { ...currentVideo, ...restProps };

      const updatedVideo = await prisma.video.update({
        where: { id: video_id },
        data: temp,
      });

      return res.status(200).json({
        status: true,
        message: "updated video successfully ",
        data: updatedVideo,
      });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({
        status: false,
        message: "Internal Server Error",
        data: null,
      });
    }
  },

  deleteVideoByBaseUser: async (req, res) => {
    const { video_id } = req.body;

    try {
      const currentVideo = await prisma.video.findUnique({
        where: {
          id: video_id,
        },
      });

      const currentCategory = await prisma.category.findUnique({
        where: {
          id: currentVideo.category_id,
        },
      });

      await prisma.category.update({
        where: {
          id: currentCategory.id,
        },
        data: {
          videoCount: currentCategory.videoCount - 1,
        },
      });
      await prisma.video.delete({
        where: {
          id: currentVideo.id,
        },
      });

      return res.status(200).json({
        status: true,
        message: "deleted video successfully",
        data: null,
      });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({
        status: false,
        message: "Internal Server Error",
        data: null,
      });
    }
  },

  uploadVideo: async (req, res) => {
    const { id } = req.user;
    const { title, description, url, categories } = req.body;

    console.log("====================================");
    console.log("over here");
    console.log("====================================");
    try {
      const offensiveTitle = await DetectOffense(title);
      const offensiveDescription = await DetectOffense(description);

      if (offensiveTitle.offensive || offensiveDescription.offensive) {
        const user = await prisma.user.findUnique({ where: { id: id } });
        const status = await prisma.status.findUnique({
          where: { id: user.status_id },
        });

        let newStatus = "";

        if (status.name === "Active") {
          newStatus = await StatusModel.getStatusByName("warning");
        } else {
          newStatus = await StatusModel.getStatusByName("caution");
        }

        await prisma.user.update({
          where: { id: id },
          data: {
            status_id: { set: newStatus.id },
          },
        });
        return res.status(200).json({
          status: false,
          message: "Offensive Title or Description",
          data: {
            offensive: true,
          },
        });
      }

      const uploadedVideo = await prisma.video.create({
        data: {
          title,
          description,
          url,
          user_id: id,
        },
      });

      if (!uploadedVideo.id) {
        return res.status(200).json({
          status: false,
          message: "Video is not uploaded successfully",
          data: null,
        });
      }

      await CategoryModel.InsertVideoCategory(uploadedVideo.id, categories);

      for (const category_id of categories) {
        const currentCategory = await prisma.category.findUnique({
          where: {
            id: category_id,
          },
        });
        await prisma.category.update({
          where: {
            id: category_id,
          },
          data: {
            videoCount: currentCategory.videoCount + 1,
          },
        });
      }

      return res.status(200).json({
        status: true,
        message: "Video uploaded successfully",
        data: uploadedVideo,
      });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({
        status: false,
        message: "Internal Server Error",
        data: null,
      });
    }
  },

  getVideoByID: async (req, res) => {
    const { id } = req.params;
    try {
      const video = await prisma.video.findUnique({ where: { id: id } });

      return res.status(200).json({
        status: true,
        message: "Video fetched successfully",
        data: video,
      });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({
        status: false,
        message: "Internal Server Error",
        data: null,
      });
    }
  },

  getVideos: async (req, res) => {
    const { page } = req.body;

    try {
      const videos = await videoModel.getVideos({}, page);

      return res.status(200).json({
        status: true,
        message: "Videos fetched successfully",
        data: videos,
      });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({
        status: false,
        message: "Internal Server Error",
        data: null,
      });
    }
  },

  getUserVideos: async (req, res) => {
    const { id } = req.params;
    try {
      const videos = await videoModel.getVideos({ user_id: id }, 1);
      return res.status(200).json({
        status: true,
        message: "User videos fetched successfully",
        data: videos,
      });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({
        status: false,
        message: "Internal Server Error",
        data: null,
      });
    }
  },

  getUserVideosBook: async (req, res) => {
    const { id } = req.params;

    try {
      const videos = await prisma.video.findMany({
        where: {
          user_id: id,
        },
        include: {
          User: {
            select: {
              bio: true,
              fullName: true,
              id: true,
              picture: true,
              username: true,
              Status: true,
            },
          },
        },
      });

      const tempSaved = await prisma.bookmark.findMany({
        where: {
          user_id: id,
        },

        include: {
          Video: {
            include: {
              User: {
                select: {
                  bio: true,
                  fullName: true,
                  id: true,
                  picture: true,
                  username: true,
                  Status: true,
                },
              },
            },
          },
        },
      });
      const savedVideos = tempSaved.map((v) => {
        return v.Video;
      });

      const tempLiked = await prisma.like.findMany({
        where: {
          user_id: id,
        },

        include: {
          Video: {
            include: {
              User: {
                select: {
                  bio: true,
                  fullName: true,
                  id: true,
                  picture: true,
                  username: true,
                  Status: true,
                },
              },
            },
          },
        },
      });
      const likedVideos = tempLiked.map((v) => {
        return v.Video;
      });

      return res.status(200).json({
        status: true,
        message: "User videos fetched successfully",
        data: {
          created: videos,
          saved: savedVideos,
          liked: likedVideos,
        },
      });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({
        status: false,
        message: "Internal Server Error",
        data: null,
      });
    }
  },

  getClientVideosBook: async (req, res) => {
    const { id } = req.user;
    try {
      const videos = await prisma.video.findMany({
        where: {
          user_id: id,
        },
        include: {
          User: {
            select: {
              bio: true,
              fullName: true,
              id: true,
              picture: true,
              username: true,
              Status: true,
            },
          },
        },
      });

      const tempSaved = await prisma.bookmark.findMany({
        where: {
          user_id: id,
        },

        include: {
          Video: {
            include: {
              User: {
                select: {
                  bio: true,
                  fullName: true,
                  id: true,
                  picture: true,
                  username: true,
                  Status: true,
                },
              },
            },
          },
        },
      });
      const savedVideos = tempSaved.map((v) => {
        return v.Video;
      });

      const tempLiked = await prisma.like.findMany({
        where: {
          user_id: id,
        },

        include: {
          Video: {
            include: {
              User: {
                select: {
                  bio: true,
                  fullName: true,
                  id: true,
                  picture: true,
                  username: true,
                  Status: true,
                },
              },
            },
          },
        },
      });
      const likedVideos = tempLiked.map((v) => {
        return v.Video;
      });

      return res.status(200).json({
        status: true,
        message: "User videos fetched successfully",
        data: {
          created: videos,
          saved: savedVideos,
          liked: likedVideos,
        },
      });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({
        status: false,
        message: "Internal Server Error",
        data: null,
      });
    }
  },
};

module.exports = Video;
