// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const loginController = require("../../controllers/login/logincontroller");

router.post('/', loginController.postlogin);

module.exports = router;
