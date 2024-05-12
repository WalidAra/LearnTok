const express = require("express");
const Follow = require("../../../controllers/follow/follow.controller");
const router = express.Router();

router.post("/state", Follow.amIFollowing);
router.put("/toggle", Follow.toggleFollow);

module.exports = router;
