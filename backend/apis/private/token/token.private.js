const express = require("express");
const router = express.Router();

router.get("/verify", async () => {
  const token = req.headers["learntok-auth-token"];

  if (!token) {
    return res.status(403).json({
      status: false,
      message: "Unauthorized  - No token provided",
      data: null,
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const currentDate = Date.now() / 1000;
    if (decoded.exp < currentDate) {
      return res.status(402).json({
        status: false,
        message: "Unauthorized  - Token expired",
        data: null,
      });
    }

    return res.status(402).json({
      status: true,
      message: "Authorized  - Token is not expired",
      data: null,
    });
  } catch (error) {
    console.error("check auth : ", error.message);
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        status: false,
        message: "Unauthorized - Invalid token",
        data: null,
      });
    } else {
      return res.status(500).json({
        status: false,
        message: "Internal Server Error",
        data: null,
      });
    }
  }
});

module.exports = router;
