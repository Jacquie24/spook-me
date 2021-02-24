const router = require("express").Router();
const sightingsController = require("../../controllers/sightingsController");

//route to get all sightings or post to all sightings
router.route("/")
  .get(sightingsController.findAll)
  .post(sightingController.create);



module.exports = router;
