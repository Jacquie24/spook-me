const router = require("express").Router();
const sightingsController = require("../../controllers/sightingsController");



//route to delete sightings, get a single sighting or edit/update a sighting
router.route("/:id")
.delete(sightingsController.remove)
.get(sightingsController.findById)
.put(sightingsController.update)
  

module.exports = router;