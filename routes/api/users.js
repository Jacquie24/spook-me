const router = require("express").Router();
const usersController = require("../../controllers/usersController");

//route to get all users, or post to all users
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create)

//route to find a single user
router.route("/:id")
.get(usersController.findById)
  

module.exports = router;