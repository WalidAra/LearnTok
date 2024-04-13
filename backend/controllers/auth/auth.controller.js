const prisma = require("../../config/prisma");
const bcrypt = require("bcrypt");
const destructProfile = require("../../scripts/destructProfile");
const createToken = require("../../helpers/createToken");
const ProviderModel = require("../../models/provider/provider.model");
const StatusModel = require("../../models/status/status.model");
const saltRounds = 10;

const Auth = {
  SignUp: async (req, res) => {
    const { email, password, username, fullName } = req.body;

    try {
      const isUser = await prisma.user.findUnique({
        where: { email: email },
      });

      if (isUser) {
        return res.status(403).json({
          status: false,
          message: "User Already exists",
          data: null,
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
      const token = await createToken(newUser.id);

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
    const { email, password } = req.body;
    try {
      const isUser = await prisma.user.findUnique({
        where: { email: email },
      });

      if (!isUser) {
        return res.status(402).json({
          status: false,
          message: "User not found",
          data: null,
        });
      }

      const match = await bcrypt.compare(password, isUser.password);
      if (!match) {
        return res.status(404).json({
          status: false,
          message: "wrong password",
          data: null,
        });
      }

      const updatedUser = await prisma.user.update({
        where: { id: isUser.id },
        data: { lastLoginAt: new Date(Date.now()) },
      });

      const user = destructProfile(updatedUser);
      const token = await createToken(updatedUser.id);

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
    try {
      const isUser = await prisma.user.findUnique({ where: { id: id } });
      const updatedUser = { ...isUser, ...req.body };

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
