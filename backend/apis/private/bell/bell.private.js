const express = require("express");
const router = express.Router();
const prisma = require("../../../config/prisma");

router.get("/", async (req, res) => {
  try {
    const notifications = await prisma.notification.findMany({
      where: {
        client_id: req.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    // Group notifications by type using reduce
    const groupedNotifications = notifications.reduce(
      (acc, notification) => {
        if (notification.type === "like") {
          acc.likes.push(notification);
        } else if (notification.type === "comment") {
          acc.comments.push(notification);
        } else if (notification.type === "follow") {
          acc.follows.push(notification);
        }
        return acc;
      },
      { likes: [], comments: [], follows: [], all: notifications }
    );

    return res.status(200).json({
      status: true,
      message: "Got user's notifications",
      data: groupedNotifications,
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      status: false,
      message: "Internal server error",
      data: null,
    });
  }
});

module.exports = router;
