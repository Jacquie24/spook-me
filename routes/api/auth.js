const router = require("express").Router();
const authController = require("../../controllers/authController");

const {
    createNewUser,
    loginUser,
} = require("../../controllers/authController");

router.router("/users/new").post(createNewUser);
router.route("/login").post(loginUser);

module.exports = router;