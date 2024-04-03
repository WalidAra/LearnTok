const prisma = require("../../config/prisma");

const videoModel = {
  getVideos: async (condition, page) => {
    if (page < 1) page = 1;
    const videos = await prisma.video.findMany({
      where: condition,
      take: 10,
      skip: 10 * (page - 1),
    });
    return videos;
  },
};

module.exports = videoModel;
