const express = require("express");
const User = require("../../../controllers/user/user.controller");
const Follow = require("../../../controllers/follow/follow.controller");
const Video = require("../../../controllers/video/video.controller");
const router = express.Router();

router.get("/:id", User.getUserByID);
router.post("/search", User.searchForUsers);
router.get("/:id/followers", Follow.getUserFollowers);
router.get("/:id/followings", Follow.getUserFollowings);
router.post("/:id/videos", Video.getUserVideos);

module.exports = router;
