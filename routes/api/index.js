const router = require("express").Router();
const sightingsRoutes = require("./sightings");
const usersRoutes = require("./user");

// sightings routes
router.use("/sightings", sightingsRoutes);

//user routes
router.use("/users", usersRoutes);

module.exports = router;