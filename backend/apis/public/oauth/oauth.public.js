const express = require("express");
const OAuth = require("../../../controllers/auth/oauth.controller");
const checkOAuth = require("../../../middlewares/checkOAuth");
const router = express.Router();

router.post("/google", checkOAuth, OAuth.Google);
router.post("/facebook", OAuth.Facebook);

module.exports = router;
