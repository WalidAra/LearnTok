const InputValidator = async (req, res, next) => {
  const isValidate = Object.values(req.body).every(
    (value) => value !== null && value !== undefined
  );

  if (!isValidate) {
    return res
      .status(405)
      .json({ status: false, message: "All fields are required", data: null });
  }

  next();
};

module.exports = InputValidator;
