const router = require("express").Router();
const sightingsRoutes = require("./sightings");
const usersRoutes = require("./users");
const loginRoutes = require("./login");

// sightings routes
router.use("/sightings", sightingsRoutes);

// router.use("/users", require("./profile"))
//user routes
router.use("/users", usersRoutes);

router.use("/login", loginRoutes);

module.exports = router;