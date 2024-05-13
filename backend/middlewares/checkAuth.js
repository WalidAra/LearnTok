const jwt = require("jsonwebtoken");

const checkAuth = async (req, res, next) => {
  const token = req.headers["learntok-auth-token"];
  if (!token) {
    return res.status(201).json({
      status: false,
      message: "Unauthorized - No token provided",
      data: null,
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(201).json({
        status: false,
        message: "Unauthorized - Token expired",
        data: {
          isExpired: true,
        },
      });
    } else if (error instanceof jwt.JsonWebTokenError) {
      return res.status(202).json({
        status: false,
        message: "Unauthorized - Invalid token",
        data: null,
      });
    } else {
      console.error("JWT verification error:", error);
      return res.status(500).json({
        status: false,
        message: "Internal Server Error",
        data: null,
      });
    }
  }
};

module.exports = checkAuth;
