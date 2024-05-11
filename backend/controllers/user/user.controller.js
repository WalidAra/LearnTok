const prisma = require("../../config/prisma");
const destructUser = require("../../scripts/destructUser");

const User = {
  getUserByID: async (req, res) => {
    const { id } = req.params;
    try {
      const isUser = await prisma.user.findUnique({
        where: { id: id },
        include: {
          Status: true,
        },
      });
      const user = destructUser(isUser);

      if (!isUser) {
        return res.status(401).json({
          status: false,
          message: "User not found",
          data: null,
        });
      }

      return res.status(200).json({
        status: true,
        message: "Got user profile",
        data: user,
      });
    } catch (error) {
      console.error("Auth controller : ", error.message);
      return res.status(500).json({
        message: "Internal server error",
        status: false,
        data: null,
      });
    }
  },
  searchForUsers: async (req, res) => {
    const { name } = req.body;

    try {
      const users = await prisma.user.findMany({
        where: {
          OR: [
            {
              username: {
                contains: name,
                mode: "insensitive",
              },
            },
            {
              fullName: {
                contains: name,
                mode: "insensitive",
              },
            },
          ],
        },
      });

      const final = users.map((u) => destructUser(u));

      return res.status(201).json({
        status: true,
        message: "Fetched users",
        data: final,
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

module.exports = User;
