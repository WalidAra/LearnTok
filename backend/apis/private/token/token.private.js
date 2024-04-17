const express = require("express");
const router = express.Router();

router.get("/verify", (req, res) => {
  return res.status(200).json({
    status: true,
    message: "authorized  - token is not expired",
    data: null,
  });
});

module.exports = router;
