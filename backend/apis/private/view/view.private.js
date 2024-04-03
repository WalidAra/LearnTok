const express = require("express");
const View = require("../../../controllers/view/view.controller");
const router = express.Router();

router.post("/create", View.createView);

module.exports = router;
