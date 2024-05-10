const prisma = require("../../config/prisma");

const videoModel = {
  getVideos: async (condition, page) => {
    if (page < 1) page = 1;
    const videos = await prisma.video.findMany({
      where: condition,
      include: {
        User: true,
      },
    });
    return videos;
  },
};

module.exports = videoModel;
