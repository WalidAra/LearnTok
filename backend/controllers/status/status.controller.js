const prisma = require("../../config/prisma");
const StatusModel = require("../../models/status/status.model");

const Status = {
  getStatus: async (req, res) => {
    try {
      const status = await prisma.status.findMany();

      if (!status) {
        return res.status(403).json({
          status: false,
          message: "Error getting status",
          data: null,
        });
      }

      return res
        .status(200)
        .json({ status: true, message: "Success", data: status });
    } catch (error) {
      console.error(error.message);
      return res
        .status(500)
        .json({ status: false, message: "Internal Server Error", data: null });
    }
  },
  getStatusByID: async (req, res) => {
    const { id } = req.params;
    try {
      const status = await prisma.status.findFirst({ where: { id: id } });
      if (!status) {
        return res.status(403).json({
          status: false,
          message: "Error getting status by id",
          data: null,
        });
      }

      return res
        .status(200)
        .json({ status: true, message: "Success", data: status });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({
        status: false,
        message: "Internal Server Error",
        data: null,
      });
    }
  },
  getStatusByName: async (req, res) => {
    const { name } = req.body;
    try {
      const status = await StatusModel.getStatusByName(name);

      if (!status) {
        return res.status(403).json({
          status: false,
          message: "Error getting status by name",
          data: null,
        });
      }

      return res
        .status(200)
        .json({ status: true, message: "Success", data: status });
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

module.exports = Status;
