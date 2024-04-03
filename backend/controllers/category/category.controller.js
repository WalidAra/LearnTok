const prisma = require("../../config/prisma");

const Category = {
  getAllCategories: async (req, res) => {
    try {
      const categories = await prisma.category.findMany();

      if (!categories) {
        return res.status(403).json({
          status: false,
          message: "Error getting categories",
          data: null,
        });
      }

      return res.status(200).json({
        status: true,
        message: "Got all categories",
        data: categories,
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
  getAllCategoryByID: async (req, res) => {
    const { id } = req.params;
    try {
      const category = await prisma.category.findFirst({ where: { id: id } });
      if (!category) {
        return res.status(403).json({
          status: false,
          message: "Error getting category",
          data: null,
        });
      }

      return res.status(200).json({
        status: true,
        message: "Got the category",
        data: category,
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

module.exports = Category;
