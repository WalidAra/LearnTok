const express = require("express");
const Auth = require("../../../controllers/auth/auth.controller");
const Bookmark = require("../../../controllers/bookmark/bookmark.controller");
const Like = require("../../../controllers/like/like.controller");
const router = express.Router();

router.get("/profile", Auth.Profile);
router.delete("/delete", Auth.delete);
router.put("/update", Auth.update);
router.get("/bookmarks", Bookmark.getUserBookmarks);
router.get("/likedVideos", Like.getUserLikedVideos);

module.exports = router;
