const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = async (id, recall) => {
  const token = await jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: recall ? "5s" : "5s",
  });
  return token;
};

module.exports = createToken;
