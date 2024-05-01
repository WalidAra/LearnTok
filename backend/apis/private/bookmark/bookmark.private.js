const express = require("express");
const Bookmark = require("../../../controllers/bookmark/bookmark.controller");
const router = express.Router();

router.put("/toggle", Bookmark.toggleSavingBookmark);
router.post("/status", Bookmark.bookmarkState);

module.exports = router;
