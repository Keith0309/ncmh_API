const router = require("express").Router();
const loginController = require("../../controllers/users/logincontroller");

router.post("/", userController.postUser);

module.exports = router;
