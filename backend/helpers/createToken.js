const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = async (id, recall) => {
  const token = await jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: recall ? "30d" : "1d",
  });
  return token;
};

module.exports = createToken;
