const router = require("express").Router();
const User = require("../../models/user");

//route to get all users, or post to all users
router.route("/")
  .get((req, res) => {
    //   const userId = req.session.user_id
    const userId = "60391323d523d324dbf4a31a"
User.findOne({_id: userId}).populate("sightings").then(data => {
    res.json(data)
})
  })
 


  

module.exports = router;