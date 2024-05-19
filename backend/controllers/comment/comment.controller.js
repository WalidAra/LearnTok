const prisma = require("../../config/prisma");
const DetectOffense = require("../../helpers/isItOffended");
const StatusModel = require("../../models/status/status.model");

const Comment = {
  getCommentByID: async (req, res) => {
    const { id } = req.params;

    try {
      const comment = await prisma.comment.findUnique({
        where: {
          id: id,
        },
      });

      return res.status(500).json({
        status: true,
        message: "Fetched comment by ID",
        data: comment,
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

  getVideoComments: async (req, res) => {
    const { id } = req.params;

    try {
      const comments = await prisma.comment.findMany({
        where: {
          video_id: id,
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

      return res.status(200).json({
        status: true,
        message: "Comments fetched successfully",
        data: comments,
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

  createComment: async (req, res) => {
    const { id } = req.user;
    const { video_id, comment } = req.body;

    try {
      const textDetection = await DetectOffense(comment);

      if (textDetection.offensive) {
        const user = await prisma.user.findUnique({
          where: { id: id },
          include: {
            Status: true,
          },
        });

        if (!user) {
          return res.status(404).json({
            status: false,
            message: "User not found",
            data: null,
          });
        }

        let newStatus = null;

        if (user.Status.name === "Active") {
          newStatus = await StatusModel.getStatusByName("warning");
        } else if (user.Status.name === "Warning") {
          newStatus = await StatusModel.getStatusByName("caution");
        } else {
          await prisma.user.update({
            where: { id: id },
            data: { isBanned: true },
          });
          return res.status(201).json({
            status: false,
            message:
              "Your account has been banned due to repeated violations of our community guidelines.",
            data: {
              isBanned: true,
            },
          });
        }

        if (newStatus) {
          await prisma.user.update({
            where: { id: id },
            data: { status_id: newStatus.id },
          });
        }

        return res.status(200).json({
          status: false,
          message:
            "Your comment is inappropriate and does not align with our community guidelines.",
          data: { offensive: true },
        });
      }

      const createdComment = await prisma.comment.create({
        data: {
          user_id: id,
          video_id: video_id,
          comment: comment,
        },
      });

      const vid = await prisma.video.findUnique({
        where: {
          id: video_id,
        },
      });

      await prisma.notification.create({
        data: {
          type: "comment",
          comment,
          user_id: vid.user_id,
        },
      });

      return res.status(200).json({
        status: true,
        message: "Comment created successfully",
        data: createdComment,
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

  deleteComment: async (req, res) => {
    const { id } = req.user;
    const { comment_id } = req.body;
    try {
      await prisma.comment.delete({
        where: {
          id: comment_id,
          user_id: id,
        },
      });

      return res.status(200).json({
        status: true,
        message: "Deleted comment successfully",
        data: null,
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

  updateComment: async (req, res) => {
    const { id } = req.user;
    const { comment_id, ...rest } = req.body;

    try {
      const currentComment = await prisma.comment.findUnique({
        where: {
          id: comment_id,
          user_id: id,
        },
      });

      const updatedComment = { ...currentComment, ...rest };

      const finalComment = await prisma.comment.update({
        where: {
          id: comment_id,
          user_id: id,
        },
        data: updatedComment,
      });
      return res.status(500).json({
        status: true,
        message: "Updated comment successfully",
        data: finalComment,
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
};

module.exports = Comment;
