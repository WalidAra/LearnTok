const prisma = require("../../config/prisma");

const View = {
  createView: async (req, res) => {
    const { id } = req.user;
    const { video_id } = req.body;

    try {
      const isExists = await prisma.view.findUnique({
        where: {
          user_id_video_id: {
            user_id: id,
            video_id: video_id,
          },
        },
      });

      if (!isExists) {
        const result = await prisma.view.create({
          data: {
            user_id: id,
            video_id: video_id,
          },
        });

        const currentVideo = await prisma.video.findUnique({
          where: { id: video_id },
        });

        await prisma.video.update({
          where: { id: video_id },
          data: {
            views_count: currentVideo.views_count + 1,
          },
        });

        if (!result) {
          return res.status(402).json({
            status: false,
            message: "Error creating a view",
            data: null,
          });
        }

        return res.status(201).json({
          status: true,
          message: "Created view successfully",
          data: null,
        });
      }
      return res.status(201).json({
        status: false,
        message: "Already created view",
        data: {
          isExists: true,
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

  getVideoViews: async (req, res) => {
    const { id } = req.params;

    try {
      const result = await prisma.view.findMany({
        where: {
          video_id: id,
        },
      });

      if (!result) {
        return res.status(402).json({
          status: false,
          message: "Error fetching views",
          data: null,
        });
      }

      return res.status(200).json({
        status: true,
        message: "Fetched views successfully",
        data: result,
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

module.exports = View;
