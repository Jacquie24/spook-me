const router = require("express").Router();
const usersController = require("../../controllers/usersController");

//route to get all users, or post to all users
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create)


  

module.exports = router;