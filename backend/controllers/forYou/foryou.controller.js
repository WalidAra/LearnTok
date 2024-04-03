const prisma = require("../../config/prisma");
// const {
//   connectToDatabase,
//   closeDatabaseConnection,
// } = require("../../config/mongodb");

const ForYou = {
  GetForYouVideos: async (req, res) => {
    const { id } = req.user;

    try {
      const list = await prisma.forYou.findUnique({ where: { user_id: id } });
      const videoIds = list.map((item) => item.video_id);
      const videos = await prisma.video.findMany({
        where: {
          id: {
            in: videoIds,
          },
        },
      });

      return res.status(200).json({
        status: true,
        message: "Fetched for you videos",
        data: videos,
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

  GenerateUserVideos: async (req, res) => {
    const { id } = req.user;

    try {
      let videos = [];
      const views = await prisma.view.findMany({ where: { id: id }, take: 20 });
      const likes = await prisma.like.findMany({ where: { id: id }, take: 20 });
      const bookmarks = await prisma.bookmark.findMany({
        where: { id: id },
        take: 20,
      });

      videos = [
        ...views.map(async (v) => {
          const view = await prisma.video.findUnique({ where: { id: v.id } });
          return view;
        }),
      ];

      videos = [
        ...videos,
        ...likes.map(async (l) => {
          const like = await prisma.video.findUnique({ where: { id: l.id } }); // corrected v.id to l.id
          return like;
        }),
      ];

      videos = [
        ...videos,
        ...bookmarks.map(async (b) => {
          const bookmark = await prisma.video.findUnique({
            where: { id: b.id },
          });
          return bookmark;
        }),
      ];

      const categories = {};

      videos.forEach((vid) => {
        vid.then((data) => {
          const temp = data.category_id;
          if (categories.hasOwnProperty(temp)) {
            categories[temp] += 1;
          } else {
            categories[temp] = 1;
          }
        });
      });

      const categoriesArray = Object.entries(categories);

      categoriesArray.sort((a, b) => b[1] - a[1]);

      const topCategories = categoriesArray.slice(0, 3);

      for (let i = 0; i < topCategories.length; i++) {
        const [categoryId, count] = topCategories[i];
        await prisma.forYou.create({
          data: {
            user_id: id,
            category_id: categoryId,
          },
        });
      }
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

module.exports = ForYou;
