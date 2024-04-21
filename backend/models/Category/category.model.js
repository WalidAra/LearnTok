const prisma = require("../../config/prisma");

const CategoryModel = {
    InsertVideoCategory: async (video_id , categories)=>{
        const videoCategoryData = categories.map((category_id) => ({
          video_id,
          category_id,
        }));

        await prisma.videoCategory.createMany({
          data: videoCategoryData,
        });
    },
};

module.exports = CategoryModel;
