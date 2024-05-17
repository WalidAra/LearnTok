const prisma = require("../../config/prisma");
const bcrypt = require("bcrypt");
const destructProfile = require("../../scripts/destructProfile");
const createToken = require("../../helpers/createToken");
const ProviderModel = require("../../models/provider/provider.model");
const StatusModel = require("../../models/status/status.model");
const saltRounds = 10;

const Auth = {
  statusStates: async (req, res) => {
    const { id } = req.user;

    try {
      const followers = await prisma.follow.findMany({
        where: {
          user_id: id,
        },
      });

      const followings = await prisma.follow.findMany({
        where: {
          client_id: id,
        },
      });

      const likes = await prisma.like.findMany({
        where: {
          user_id: id,
        },
      });

      return res.status(201).json({
        message: "got user statuses",
        status: true,
        data: {
          likes: likes.length,
          followings: followings.length,
          followers: followers.length,
        },
      });
    } catch (error) {
      console.error("Auth controller : ", error.message);
      return res
        .status(500)
        .json({ message: "Internal server error", status: false, data: null });
    }
  },

  checkLikeAndBookmark: async (req, res) => {
    const { id } = req.user;
    const { video_id } = req.body;

    try {
      const like = await prisma.like.findFirst({
        where: {
          user_id: id,
          video_id: video_id,
        },
      });
      const bookmark = await prisma.bookmark.findFirst({
        where: {
          user_id: id,
          video_id: video_id,
        },
      });

      return res.status(200).json({
        message: "Got reaction status",
        status: true,
        data: {
          isLiked: like != null,
          isBookmarked: bookmark != null,
        },
      });
    } catch (error) {
      console.error("Auth controller : ", error.message);
      return res
        .status(500)
        .json({ message: "Internal server error", status: false, data: null });
    }
  },

  idMatch: async (req, res) => {
    const { id } = req.user;
    const { user_id } = req.body;
    try {
      if (id === user_id) {
        return res
          .status(200)
          .json({ status: true, data: null, message: "user id match" });
      } else {
        return res.status(200).json({
          status: false,
          data: null,
          message: "user id does not match",
        });
      }
    } catch (error) {
      console.error("Auth controller : ", error.message);
      return res
        .status(500)
        .json({ message: "Internal server error", status: false, data: null });
    }
  },

  SignUp: async (req, res) => {
    const { email, password, username, fullName, recall } = req.body;

    try {
      const isUser = await prisma.user.findUnique({
        where: { email: email },
      });

      if (isUser) {
        return res.status(200).json({
          status: false,
          message: "User Already exists",
          data: {
            isExist: true,
          },
        });
      }
      const hashedPwd = await bcrypt.hash(password, saltRounds);

      const provider = await ProviderModel.getProviderByName("direct");
      const status = await StatusModel.getStatusByName("active");

      const newUser = await prisma.user.create({
        data: {
          password: hashedPwd,
          email: email,
          username: username,
          fullName: fullName,
          picture: "",
          bio: "",
          provider_id: provider.id,
          status_id: status.id,
        },
      });

      const user = destructProfile(newUser);
      const token = createToken(newUser.id, recall);

      return res.status(200).json({
        status: true,
        message: " Registered successfully",
        data: user,
        token,
      });
    } catch (error) {
      console.error("Auth controller : ", error.message);
      return res
        .status(500)
        .json({ message: "Internal server error", status: false, data: null });
    }
  },

  SignIn: async (req, res) => {
    const { email, password, recall } = req.body;
    try {
      const isUser = await prisma.user.findUnique({
        where: { email: email },
      });

      if (!isUser) {
        return res.status(200).json({
          status: false,
          message: "User not found",
          data: {
            notFound: true,
          },
        });
      }

      const match = await bcrypt.compare(password, isUser.password);
      if (!match) {
        return res.status(200).json({
          status: false,
          message: "wrong password",
          data: {
            wrongPW: true,
          },
        });
      }

      const updatedUser = await prisma.user.update({
        where: { id: isUser.id },
        data: { lastLoginAt: new Date(Date.now()) },
      });

      const user = destructProfile(updatedUser);
      const token = createToken(updatedUser.id, recall);

      return res.status(200).json({
        status: true,
        message: " authenticated successfully",
        data: user,
        token,
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

  Profile: async (req, res) => {
    const { id } = req.user;
    try {
      const isUser = await prisma.user.findUnique({
        where: {
          id: id,
        },
        include: {
          Status: true,
        },
      });

      if (!isUser) {
        return res.status(401).json({
          status: false,
          message: "User not found",
          data: null,
        });
      }

      const user = destructProfile(isUser);

      return res.status(201).json({
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

  update: async (req, res) => {
    const { id } = req.user;
    const { bio, email, fullName, password, username, picture } = req.body;
    try {
      const hashedPwd = await bcrypt.hash(password, saltRounds);
      const isUser = await prisma.user.findUnique({ where: { id: id } });
      const updatedUser = {
        ...isUser,
        bio: bio ? bio : isUser.bio,
        email: email ? email : isUser.email,
        fullName: fullName && !/\s/.test(fullName) ? fullName : isUser.fullName,
        password: password ? hashedPwd : isUser.password,
        username: username ? username : isUser.username,
        picture: picture ? picture : isUser.picture,
      };

      const finalUser = await prisma.user.update({
        where: { id: id },
        data: updatedUser,
      });

      const user = destructProfile(finalUser);
      return res.status(200).json({
        status: true,
        message: "updated profile successfully ",
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

  delete: async (req, res) => {
    const { id } = req.user;
    try {
      await prisma.user.delete({ where: { id: id } });

      return res.status(200).json({
        status: true,
        message: "deleted user successfully",
        data: null,
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
};

module.exports = Auth;
