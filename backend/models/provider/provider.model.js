const prisma = require("../../config/prisma");
const Capitalize = require("../../scripts/Capitalize");

const ProviderModel = {
  getProviderByName: async (name) => {
    const provider = await prisma.provider.findFirst({
      where: { name: Capitalize(name) },
    });
    return provider;
  },
};

module.exports = ProviderModel;
