const prisma = require("../../config/prisma");
const createToken = require("../../helpers/createToken");
const ProviderModel = require("../../models/provider/provider.model");
const StatusModel = require("../../models/status/status.model");
const destructUser = require("../../scripts/destructUser");
const OAuth = {
  Google: async (req, res) => {
    const { email, picture, name } = req.oauth;
    const { recall } = req.body;

    try {
      let user;
      let token;
      const provider = await ProviderModel.getProviderByName("google");
      const findUser = await prisma.user.findUnique({
        where: {
          email: email,
          provider_id: provider.id,
        },
      });

      if (findUser) {
        user = destructUser(findUser);
        token = createToken(findUser.id, recall);
        return res.status(200).json({
          status: true,
          message: "User sign in successfully",
          data: user,
          token: token,
        });
      }

      const status = await StatusModel.getStatusByName("active");
      const isUser = await prisma.user.create({
        data: {
          email: email,
          picture: picture,
          fullName: name,
          bio: "",
          password: "",
          username: email.split("@")[0],
          provider_id: provider.id,
          status_id: status.id,
        },
      });

      user = destructUser(isUser);
      token = createToken(isUser.id, recall);
      return res.status(200).json({
        status: true,
        message: "User created successfully",
        data: user,
        token: token,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Invalid server error",
        status: false,
        data: null,
      });
    }
  },
  Facebook: async (req, res) => {},
};

module.exports = OAuth;
