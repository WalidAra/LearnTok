const prisma = require("../../config/prisma");
const ProviderModel = require("../../models/provider/provider.model");

const Provider = {
  getProviders: async (req, res) => {
    try {
      const providers = await prisma.provider.findMany();

      if (!providers) {
        return res.status(403).json({
          status: false,
          message: "Error getting providers ",
          data: null,
        });
      }

      return res
        .status(200)
        .json({ status: true, message: "Success", data: providers });
    } catch (error) {
      console.error(error.message);
      return res
        .status(500)
        .json({ status: false, message: "Internal Server Error", data: null });
    }
  },
  getProviderByID: async (req, res) => {
    const { id } = req.params;
    try {
      const provider = await prisma.provider.findFirst({ where: { id: id } });
      if (!provider) {
        return res.status(403).json({
          status: false,
          message: "Error getting provider by id",
          data: null,
        });
      }

      return res
        .status(200)
        .json({ status: true, message: "Success", data: provider });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({
        status: false,
        message: "Internal Server Error",
        data: null,
      });
    }
  },
  getProviderByName: async (req, res) => {
    const { name } = req.body;
    try {
      const provider = await ProviderModel.getProviderByName(name);

      if (!provider) {
        return res
          .status(403)
          .json({
            status: false,
            message: "Error getting provider by name",
            data: null,
          });
      }

      return res
        .status(200)
        .json({ status: true, message: "Success", data: provider });
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

module.exports = Provider;
