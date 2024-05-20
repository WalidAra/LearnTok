const prisma = require("../../config/prisma");

const Follow = {
  amIFollowing: async (req, res) => {
    const { id } = req.user; // client
    const { user_id } = req.body;

    try {
      if (id === user_id) {
        return res.status(200).json({
          status: false,
          message: "You are you basically :D",
          data: {
            isItMe: true,
          },
        });
      }

      const isFollow = await prisma.follow.findUnique({
        where: {
          client_id_user_id: {
            client_id: id,
            user_id: user_id,
          },
        },
      });

      return res.status(200).json({
        status: true,
        message: isFollow
          ? "You are following this user"
          : "You are not following this user",
        data: isFollow ? true : false,
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

  toggleFollow: async (req, res) => {
    const { id } = req.user;
    const { user_id } = req.body;

    try {
      const amIFollowing = await prisma.follow.findUnique({
        where: {
          client_id_user_id: {
            client_id: id,
            user_id: user_id,
          },
        },
      });

      if (amIFollowing) {
        await prisma.follow.delete({
          where: {
            client_id_user_id: {
              client_id: id,
              user_id: user_id,
            },
          },
        });
        return res.status(200).json({
          status: true,
          message: "unfollowed user successfully",
          data: false,
        });
      } else {
        await prisma.follow.create({
          data: {
            client_id: id,
            user_id: user_id,
          },
        });

        await prisma.notification.create({
          data: {
            comment_id: "",
            content: ` followed you`,
            client_id: id,
            type: "follow",
            whoFollowed: user_id,
            user_id: user_id,
          },
        });

        return res.status(200).json({
          status: true,
          message: "followed user successfully",
          data: true,
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

  getUserFollowers: async (req, res) => {
    const { id } = req.params; // client

    try {
      const followers = await prisma.follow.findMany({
        where: {
          user_id: id,
        },
      });

      res.status(201).json({
        status: true,
        message: "Got followers successfully",
        data: followers,
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
  getUserFollowings: async (req, res) => {
    const { id } = req.params;

    try {
      const followers = await prisma.follow.findMany({
        where: {
          client_id: id,
        },
      });

      res.status(201).json({
        status: true,
        message: "Got followings successfully",
        data: followers,
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
  getUserBaseFollowings: async (req, res) => {
    const { id } = req.user;

    try {
      const followers = await prisma.follow.findMany({
        where: {
          client_id: id,
        },
      });

      res.status(201).json({
        status: true,
        message: "Got followings successfully",
        data: followers,
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
  getUserBaseFollowers: async (req, res) => {
    const { id } = req.user;

    try {
      const followers = await prisma.follow.findMany({
        where: {
          user_id: id,
        },
      });

      res.status(201).json({
        status: true,
        message: "Got followings successfully",
        data: followers,
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

module.exports = Follow;
