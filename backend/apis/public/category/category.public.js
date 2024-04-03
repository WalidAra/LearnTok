const express = require("express");
const Category = require("../../../controllers/category/category.controller");
const router = express.Router();

router.get("/", Category.getAllCategories);
router.get("/:id", Category.getAllCategoryByID);

module.exports = router;
