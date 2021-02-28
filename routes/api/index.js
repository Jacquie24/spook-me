const router = require("express").Router();
const sightingsRoutes = require("./sightings");
const usersRoutes = require("./users");

// sightings routes
router.use("/sightings", sightingsRoutes);

router.use("/users", require("./profile"))
//user routes
router.use("/users", usersRoutes);

module.exports = router;