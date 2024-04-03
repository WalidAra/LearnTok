const express = require("express");
const Provider = require("../../../controllers/provider/provider.controller");
const router = express.Router();

router.get("/", Provider.getProviders);
router.get("/:id", Provider.getProviderByID);
router.post("/name", Provider.getProviderByName);

module.exports = router;
