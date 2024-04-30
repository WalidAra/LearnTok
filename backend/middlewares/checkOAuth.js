const jwt = require("jsonwebtoken");

const checkOAuth = async (req, res, next) => {
  const { accessToken } = req.body;

  if (!accessToken) {
    return res.status(403).json({
      status: false,
      message: "Unauthorized - token is required",
      data: null,
    });
  }

  try {
    const decodedToken = jwt.decode(accessToken);
    req.oauth = decodedToken;

    next();
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
      data: null,
    });
  }
};

module.exports = checkOAuth;
