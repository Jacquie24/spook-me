const router = require("express").Router();
const db = require("../../models");

//route to get all users, or post to all users
router.route("/")
//   .get(usersController.findAll)
  .post((req, res) => {
    console.log(req.body);
  db.User.findOne({username: req.body.username}).then(dbModel => {
      if(dbModel) {
        if(dbModel.password === req.body.password) {
            res.json(dbModel)
        } else {
          res.json("Username or password is incorrect!");
        } 
  
      } else {
          res.json("Username or password is incorrect!");
      }

  }) 
  


  })


// get will be findOne
//post will be signup 
//route to find a single user
// router.route("/:id")
// .get(usersController.findById)
  //findById will be the login 

module.exports = router;