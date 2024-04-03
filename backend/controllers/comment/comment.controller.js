const prisma = require("../../config/prisma");

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
      const createdComment = await prisma.comment.create({
        data: {
          user_id: id,
          video_id: video_id,
          comment: comment,
        },
      });
      return res.status(200).json({
        status: true,
        message: "Comments fetched successfully",
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
