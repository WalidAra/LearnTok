const express = require("express");
const Bookmark = require("../../../controllers/bookmark/bookmark.controller");
const router = express.Router();

router.post("/create", Bookmark.createNewBookmark);
router.delete("/delete", Bookmark.deleteBookmark);

module.exports = router;
