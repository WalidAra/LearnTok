const express = require("express");
const Comment = require("../../../controllers/comment/comment.controller");
const router = express.Router();

router.post("/create", Comment.createComment);
router.put("/update", Comment.updateComment);
router.delete("/delete", Comment.deleteComment);

module.exports = router;
