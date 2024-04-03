const express = require("express");
const Video = require("../../../controllers/video/video.controller");
const router = express.Router();

router.post("/upload", Video.uploadVideo);
router.delete("/delete", Video.deleteVideoByBaseUser);
router.put("/update", Video.updateVideo);

module.exports = router;
