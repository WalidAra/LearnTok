const express = require("express");
const router = express.Router();
const prisma = require("../../../config/prisma");
router.get("/", async (req, res) => {
  try {
    const bells = await prisma.notification.findMany({
      where: {
        user_id: req.user.id,
      },

      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json({
      status: true,
      message: "Internal server error ",
      data: bells,
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

module.exports = router;
