const prisma = require("../../config/prisma");
const Note = require("../../scripts/shema.mongo");

const Like = {
  getUserLikedVideos: async (req, res) => {
    const { id } = req.user;

    try {
      const likedVids = await prisma.like.findMany({
        where: {
          user_id: id,
        },
      });

      return res.status(200).json({
        status: true,
        message: "Fetched liked videos",
        data: likedVids,
      });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({
        status: false,
        message: "Internal server error",
        data: null,
      });
    }
  },

  ToggleLike: async (req, res) => {
    const { id } = req.user; // me who liked
    const { video_id } = req.body;

    try {
      const currentVideo = await prisma.video.findUnique({
        where: { id: video_id },
      });
      const isLike = await prisma.like.findUnique({
        where: {
          user_id_video_id: {
            user_id: id,
            video_id: video_id,
          },
        },
      });

      if (isLike) {
        await prisma.like.delete({
          where: {
            user_id_video_id: {
              user_id: id,
              video_id: video_id,
            },
          },
        });

        await prisma.video.update({
          where: { id: video_id },
          data: {
            likes_count: currentVideo.likes_count - 1,
          },
        });
        return res.status(200).json({
          status: true,
          message: "unLike video successfully",
          data: false,
        });
      } else {
        await prisma.like.create({
          data: {
            user_id: id,
            video_id: video_id,
          },
        });

        await prisma.video.update({
          where: { id: video_id },
          data: {
            likes_count: currentVideo.likes_count + 1,
          },
        });

        await prisma.notification.create({
          data: {
            comment_id: "",
            content: `liked your video`,
            client_id: id,
            type: "like",
            whoFollowed: "",
            user_id: currentVideo.user_id,
          },
        });
      }
    } catch (error) {
      console.error(error.message);
      return res.status(403).json({
        status: false,
        message: "Internal server error",
        data: null,
      });
    }
  },
  amILikingThisVideo: async (req, res) => {
    const { id } = req.user;
    const { video_id } = req.body;

    try {
      const isLike = await prisma.like.findUnique({
        where: {
          user_id_video_id: {
            user_id: id,
            video_id: video_id,
          },
        },
      });

      return res.status(200).json({
        status: true,
        message: isLike
          ? "You are liking this video"
          : "You are not liking this video",
        data: isLike ? true : false,
      });
    } catch (error) {
      console.error(error.message);
      return res.status(403).json({
        status: false,
        message: "Internal server error",
        data: null,
      });
    }
  },
};

module.exports = Like;
