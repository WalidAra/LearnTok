const prisma = require("../../config/prisma");

const videoModel = {
  getVideos: async (condition, page) => {
    if (page < 1) page = 1;
    const videos = await prisma.video.findMany({
      where: condition,
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
    return videos;
  },
};

module.exports = videoModel;
