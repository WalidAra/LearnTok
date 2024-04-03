const express = require("express");
const Comment = require("../../../controllers/comment/comment.controller");
const router = express.Router();

router.get("/:id", Comment.getCommentByID);

module.exports = router;
