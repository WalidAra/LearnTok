const express = require("express");
const Video = require("../../../controllers/video/video.controller");
const View = require("../../../controllers/view/view.controller");
const Comment = require("../../../controllers/comment/comment.controller");
const router = express.Router();

router.get("/", Video.getVideos);
router.post("/category", Video.getVideoBasedOnCategory);
router.get("/trending", Video.getTrendingVideos);
router.post("/search", Video.searchVideos);
router.get("/:id", Video.getVideoByID);
router.post("/:id/views", View.getVideoViews);
router.get("/:id/comments", Comment.getVideoComments);


module.exports = router;
