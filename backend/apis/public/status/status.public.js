const express = require("express");
const Status = require("../../../controllers/status/status.controller");
const router = express.Router();

router.get("/", Status.getStatus);
router.get("/:id", Status.getStatusByID);
router.post("/name", Status.getStatusByName);

module.exports = router;