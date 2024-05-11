const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = (id, recall) => {
  const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: recall ? "1d" : "30m",
  });
  return token;
};

module.exports = createToken;
