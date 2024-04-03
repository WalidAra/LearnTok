const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const ExeQuery = async () => {
  try {
    console.log("====================================");
    console.log("====================================");
  } catch (error) {
    console.error(error.message);
  } finally {
    await prisma.$disconnect();
  }
};

ExeQuery();

//  { category: "STEM" },
//         { category: "Language" },
//         { category: "History" },
//         { category: "Arts" },
//         { category: "Computer Science" },
//         { category: "Business & Entrepreneurship" },
//         { category: "Health" },
//         { category: "Career Development" },
//         { category: "Environmental Studies" },
//         { category: "Specialized Skills" },
//         { category: "Cultural Studies" },
//         { category: "Parenting & Child Development" },
//         { category: "Sports and Fitness" },
//         { category: "Travel and Culture" },
//         { category: "Creative Writing" },
