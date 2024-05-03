const express = require("express");
const Video = require("../../../controllers/video/video.controller");
const router = express.Router();

router.get("/", Video.getTrendingVideos);

module.exports = router;
