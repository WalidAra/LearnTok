const prisma = require("../../config/prisma");
const Capitalize = require("../../scripts/Capitalize");

const StatusModel = {
  getStatusByName: async (name) => {
    const status = await prisma.status.findFirst({
      where: { name: Capitalize(name) },
    });
    return status;
  },
};

module.exports = StatusModel;
