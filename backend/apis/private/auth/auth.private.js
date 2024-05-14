const express = require("express");
const Auth = require("../../../controllers/auth/auth.controller");
const Bookmark = require("../../../controllers/bookmark/bookmark.controller");
const Like = require("../../../controllers/like/like.controller");
const Video = require("../../../controllers/video/video.controller");
const Follow = require("../../../controllers/follow/follow.controller");
const router = express.Router();

router.get("/profile", Auth.Profile);
router.post("/match", Auth.idMatch);
router.delete("/delete", Auth.delete);
router.put("/update", Auth.update);
router.get("/bookmarks", Bookmark.getUserBookmarks);
router.get("/likedVideos", Like.getUserLikedVideos);
router.get("/videos-book", Video.getClientVideosBook);
router.get("/followings", Follow.getUserBaseFollowings);
router.get("/followers", Follow.getUserBaseFollowers);
router.post("/reactors", Auth.checkLikeAndBookmark);
router.get("/profile-status", Auth.statusStates);

module.exports = router;
