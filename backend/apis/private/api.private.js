const express = require("express");
const router = express.Router();

router.use("/auth", require("./auth/auth.private"));
router.use("/follow", require("./follow/follow.private"));
router.use("/video", require("./video/video.private"));
router.use("/view", require("./view/view.private"));
router.use("/like", require("./like/like.private"));
router.use("/comment", require("./comment/comment.private"));
router.use("/bookmark", require("./bookmark/bookmark.private"));
router.use("/forYou", require("./forYou/you.private.js"));

module.exports = router;
