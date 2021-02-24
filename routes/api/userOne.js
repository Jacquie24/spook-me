const router = require("express").Router();
const usersController = require("../../controllers/usersOneController");



//route to find a single user
router.route("/:id")
.get(usersController.findById)

  

module.exports = router;