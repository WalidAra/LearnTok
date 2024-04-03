const prisma = require("../../config/prisma");

const Bookmark = {
  getUserBookmarks: async (req, res) => {
    try {
      const bookmarks = await prisma.bookmark.findMany({
        where: {
          user_id: req.user.id,
        },
      });

      return res.status(200).json({
        status: true,
        message: "User bookmarks",
        data: bookmarks,
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

  createNewBookmark: async (req, res) => {
    const { id } = req.user;
    const { video_id } = req.body;
    try {
      const result = await prisma.bookmark.create({
        data: {
          user_id: id,
          video_id: video_id,
        },
      });

      return res.status(200).json({
        status: true,
        message: "Added bookmark successfully",
        data: result,
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

  deleteBookmark: async (req, res) => {
    const { id } = req.user;
    const { bookmark_id } = req.body;

    try {
      await prisma.bookmark.delete({
        where: {
          user_id: id,
          id: bookmark_id,
        },
      });

      return res.status(200).json({
        status: true,
        message: "Deleted bookmark successfully",
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
};

module.exports = Bookmark;
