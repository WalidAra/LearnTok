const express = require("express");
const Follow = require("../../../controllers/follow/follow.controller");
const router = express.Router();

router.post("/check-following", Follow.amIFollowing);
router.post("/toggle", Follow.toggleFollow);

module.exports = router;
