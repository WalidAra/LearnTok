const express = require("express");
const Like = require("../../../controllers/like/like.controller");
const router = express.Router();

router.put("/toggle", Like.ToggleLike);
router.post("/status", Like.amILikingThisVideo);

module.exports = router;
