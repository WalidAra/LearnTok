const prisma = require("../../config/prisma");
// const {
//   connectToDatabase,
//   closeDatabaseConnection,
// } = require("../../config/mongodb");

const ForYou = {
  GenerateUserVideos: async (req, res) => {
    const { id } = req.user;

    try {
      const [views, likes, bookmarks] = await Promise.all([
        prisma.view.findMany({ where: { user_id: id }, take: 20 }),
        prisma.like.findMany({ where: { user_id: id }, take: 20 }),
        prisma.bookmark.findMany({ where: { user_id: id }, take: 20 }),
      ]);

      const videoIds = [
        ...views.map((v) => v.video_id),
        ...likes.map((l) => l.video_id),
        ...bookmarks.map((b) => b.video_id),
      ];

      const videos = await prisma.video.findMany({
        where: {
          id: {
            in: videoIds,
          },
        },
        include: {
          categories: true,
        },
      });

      const categoriesCount = {};

      videos.forEach((video) => {
        video.categories.forEach((category) => {
          const categoryId = category.category_id;
          categoriesCount[categoryId] = (categoriesCount[categoryId] || 0) + 1;
        });
      });

      const sortedCategories = Object.entries(categoriesCount).sort(
        (a, b) => b[1] - a[1]
      );

      const topCategories = sortedCategories.slice(0, 3);

      const finalVids = await Promise.all(
        topCategories.map(async (arr) => {
          const categoryId = arr[0];
          const temp = await prisma.video.findMany({
            where: {
              categories: {
                some: {
                  category_id: categoryId,
                },
              },
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
          return temp;
        })
      );

      const flattenedFinalVids = finalVids.flat();

      return res.status(200).json({
        status: true,
        message: "Got for you videos",
        data: flattenedFinalVids,
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

module.exports = ForYou;
