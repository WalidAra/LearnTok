const express = require("express");
const router = express.Router();
const prisma = require("../../../config/prisma");

router.get("/users", async (req, res) => {
  try {
    const popularUsers = await prisma.follow.groupBy({
      by: ["user_id"],
      _count: {
        user_id: true,
      },
      orderBy: {
        _count: {
          user_id: "desc",
        },
      },
    });

    return res.status(200).json({
      status: true,
      message: "got popular users",
      data: popularUsers,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      status: false,
      message: "Internal server error ",
      data: null,
    });
  }
});
router.get("/searches", async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      status: false,
      message: "Internal server error ",
      data: null,
    });
  }
});

module.exports = router;
