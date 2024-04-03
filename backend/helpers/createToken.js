const jwt = require("jsonwebtoken");
const createToken = async (id) => {
  const token = await jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return token;
};

module.exports = createToken;
