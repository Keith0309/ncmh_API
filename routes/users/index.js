const router = require("express").Router();
const userController = require("../../controllers/users/usercontroller");

router.get("/", userController.getUser);

router.post("/", userController.postUser);

router.patch("/:id", userController.patchUser);

router.delete("/:id", userController.deleteUser);

module.exports = router;
