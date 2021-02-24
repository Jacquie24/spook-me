const router = require("express").Router();
const sightingController = require("../../controllers/sightingsController");

//route to get all sightings or post to all sightings
router.route("/")
  .get(sightingController.findAll)
  .post(sightingController.create);

  //route to delete sightings, get a single sighting or edit/update a sighting
router.route("/:id")
.delete(sightingController.remove)
.get(sightingController.findById)
.put(sightingController.update)


module.exports = router;
