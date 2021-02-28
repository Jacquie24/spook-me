const router = require("express").Router();
const User = require("../../models/user");

//route that is use to bring in a hardcoded userid and use the .populate to serve up the sightings data associated with that userID
router.route("/")
  .get((req, res) => {
    //   const userId = req.session.user_id
    const userId = "60396422725534421f4467f9"
User.findOne({_id: userId}).select('-__v').populate("sightings").then(data => {
  console.log(data);
    res.json(data)
})
  })
 


  

module.exports = router;