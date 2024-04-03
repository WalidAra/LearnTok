const prisma = require("../../config/prisma");

const Follow = {
  amIFollowing: async (req, res) => {
    const { id } = req.user;
    const { following_id } = req.body;

    try {
      const isFollow = await prisma.follow.findUnique({
        where: {
          follower_id_following_id: {
            follower_id: id,
            following_id: following_id,
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
    const { following_id } = req.body;

    try {
      const amIFollowing = await prisma.follow.findUnique({
        where: {
          follower_id_following_id: {
            follower_id: id,
            following_id: following_id,
          },
        },
      });

      if (amIFollowing) {
        await prisma.follow.delete({
          where: {
            follower_id_following_id: {
              follower_id: id,
              following_id: following_id,
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
            follower_id: id,
            following_id: following_id,
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
    const { id } = req.params;

    try {
      const followers = await prisma.follow.findMany({
        where: {
          following_id: id,
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
          follower_id: id,
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
