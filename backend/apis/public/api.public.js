const express = require("express");
const InputValidator = require("../../middlewares/InputValidator");
const router = express.Router();

router.use("/providers", require("./provider/provider.public"));
router.use("/statuses", require("./status/status.public"));
router.use("/auth", InputValidator, require("./auth/auth.public"));
router.use("/oauth", require("./oauth/oauth.public"));
router.use("/user", require("./user/user.public"));
router.use("/categories" , require('./category/category.public'));
router.use("/videos" , require('./video/video.public'));
router.use("/comment" , require('./comment/comment.public'));

module.exports = router;
