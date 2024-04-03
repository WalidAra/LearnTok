const express = require("express");
const Auth = require("../../../controllers/auth/auth.controller");
const router = express.Router();

router.post('/sign-in', Auth.SignIn );
router.post('/sign-up', Auth.SignUp );

module.exports = router;
