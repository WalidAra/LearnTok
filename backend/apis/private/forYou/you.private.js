const express = require("express");
const router = express.Router();
const ForYou = require("../../../controllers/forYou/foryou.controller");

router.get("/", ForYou.GenerateUserVideos);

module.exports = router;
