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

  bookmarkState: async (req, res) => {
    const { id } = req.user;
    const { video_id } = req.body;
    try {
      const isExists = await prisma.bookmark.findUnique({
        where: {
          user_id_video_id: {
            user_id: id,
            video_id: video_id,
          },
        },
      });

      return res.status(200).json({
        status: true,
        message: isExists
          ? "This Video has already been saved"
          : " This video has not been saved",
        data: isExists ? true : false,
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

  toggleSavingBookmark: async (req, res) => {
    const { id } = req.user;
    const { video_id } = req.body;

    try {
      const isExists = await prisma.bookmark.findUnique({
        where: {
          user_id_video_id: {
            user_id: id,
            video_id: video_id,
          },
        },
      });

      if (isExists) {
        await prisma.bookmark.delete({
          where: {
            user_id_video_id: {
              user_id: id,
              video_id: video_id,
            },
          },
        });

        return res.status(200).json({
          status: true,
          message: "Deleted bookmark successfully ",
          data: false,
        });
      } else {
        await prisma.bookmark.create({
          data: {
            user_id: id,
            video_id: video_id,
          },
        });
        return res.status(200).json({
          status: true,
          message: "Created bookmark successfully ",
          data: true,
        });
      }
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
