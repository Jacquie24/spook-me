// const router = require("express").Router();
// const User = require("../../models/user");

// //route that is use to bring in a hardcoded userid and use the .populate to serve up the sightings data associated with that userID
// router.route("/:id").get((req, res) => {
//   const userId = req.params.id;
//   res.send(userId);

  //   const userId = req.session.user_id

  // User.findById(userId)
    // .select("-__v")
    // .populate("sightings")
    // .then((data) => {
    //   console.log(req.params.id);
    //   res.json(data);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
// });

// module.exports = router;
