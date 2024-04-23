const prisma = require("../../config/prisma");
const CategoryModel = require("../../models/Category/category.model");
const videoModel = require("../../models/video/video.model");

const Video = {
  searchVideos: async (req, res) => {
    const { title } = req.body;

    try {
      const videos = await prisma.video.findMany({
        where: {
          title: {
            contains: title,
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
    try {
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
    const { page } = req.body;
    try {
      const videos = await videoModel.getVideos({ user_id: id }, page);
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

  getUserBaseVideos: async (req, res) => {
    const { id } = req.user;
    try {
      const videos = await prisma.video.findMany({
        where: {
          user_id: id,
        },
      });
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
};

module.exports = Video;
