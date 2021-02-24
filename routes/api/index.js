const router = require("express").Router();
const sightingsAllRoutes = require("./sightings");
const sightingsOneRoutes = require("./sightingsOne");
const userAllRoutes = require("./user");
const userOneRoutes = require("./userOne");

// sightings routes
router.use("/sightingsAll", sightingsAllRoutes);
router.use("/sightingsOne", sightingsOneRoutes);

//user routes
router.use("/userOne", userAllRoutes);
router.use("/userAll", userOneRoutes);

module.exports = router;