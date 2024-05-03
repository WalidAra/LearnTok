const express = require("express");
const router = express.Router();
const User = require("../../../scripts/shema.mongo");

router.get("/", async (req, res) => {
  const { id } = req.user;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res
        .status(404)
        .send({ message: "User not found", status: false, data: null });
    }
    res.status(200).send({
      status: true,
      message: "Got user profile",
      data: user.notifications,
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
