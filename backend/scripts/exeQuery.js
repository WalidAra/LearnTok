const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const ExeQuery = async () => {
  try {
    console.log("====================================");
    await prisma.status.createMany({
      data: [
        {
          name: "Active",
        },
        {
          name: "Warning",
        },
        {
          name: "Caution",
        },
      ],
    });
    await prisma.provider.createMany({
      data: [
        {
          name: "Google",
        },
        {
          name: "Facebook",
        },
        {
          name: "Direct",
        },
      ],
    });
    await prisma.category.createMany({
      data: [
        { category: "STEM" },
        { category: "Language" },
        { category: "History" },
        { category: "Arts" },
        { category: "Computer Science" },
        { category: "Business & Entrepreneurship" },
        { category: "Health" },
        { category: "Career Development" },
        { category: "Environmental Studies" },
        { category: "Specialized Skills" },
        { category: "Cultural Studies" },
        { category: "Parenting & Child Development" },
        { category: "Sports and Fitness" },
        { category: "Travel and Culture" },
        { category: "Creative Writing" },
      ],
    });
    console.log('done !!');
    console.log("====================================");
  } catch (error) {
    console.error(error.message);
  } finally {
    await prisma.$disconnect();
  }
};

ExeQuery();


