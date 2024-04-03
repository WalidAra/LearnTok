const express = require("express");
const checkAuth = require("../middlewares/checkAuth");
const router = express.Router();

router.use("/public", require("./public/api.public"));
router.use("/private", checkAuth, require("./private/api.private"));

module.exports = router;
