const jwt = require("jsonwebtoken");

const checkAuth = async (req, res, next) => {
  const token = req.headers["learntok-auth-token"];
  if (!token) {
    return res.status(403).json({
      status: false,
      message: "Unauthorized - No token provided",
      data: null,
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.exp < Date.now() / 1000) {
      return res.status(401).json({
        status: false,
        message: "Unauthorized - Token expired",
        data: {
          isExpired: true,
        },
      });
    }

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
      data: null,
    });
  }
};

module.exports = checkAuth;
