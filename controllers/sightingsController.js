const db = require("../models");

// Defining methods for the SightingsController
module.exports = {
	findAll: function (req, res) {
		db.Sighting.find(req.query)
			.sort({ date: -1 })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	findById: function (req, res) {
		db.Sighting.findById(req.params.id)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},

	// create: function (req, res) {
	// 	db.Sighting.create(req.body)
	// 		.then((dbModel) => res.json(dbModel))
	// 		.catch((err) => res.status(422).json(err));
	// },
	
	create: function (req, res) {
		db.Sighting.create(req.body).then((newSighting) => {
		  db.User.findByIdAndUpdate(
			req.params.id,
			{ $push: { sightings: newSighting._id } },
			{ new: true }
		  ).then((updatedUser) => {
			  console.log(updatedUser);
			res.json(newSighting);
		  });
		});
	  },

	//   createMenuItem: function (req, res) {
	// 	db.MenuItem.create(req.body).then((newMenuItem) => {
	// 	  db.Restaurant.findByIdAndUpdate(
	// 		req.params.id,
	// 		{ $push: { menuItems: newMenuItem._id } },
	// 		{ new: true }
	// 	  ).then((updatedRestaurant) => {
	// 		res.json(updatedRestaurant);
	// 	  });
	// 	});
	//   },



	// create: function (req, res) {
	// 	db.Sighting.create(req.body)
	// 		.then((dbModel) => {
	// 			console.log(dbModel)
	// 			db.User.findOneAndUpdate({
	// 				_id: "603c0e5cd7c0193e94d045e8"//req.sessions.userId
	// 			},{$addToSet:{sightings:dbModel._id}}).then(data=>{
	// 				console.log(data)
	// 				res.json(dbModel)
	// 			}).catch((err) => res.status(422).json(err));
	// 		})
	// 		.catch((err) => res.status(422).json(err));
	// },
	update: function (req, res) {
		db.Sighting.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true})
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	remove: function (req, res) {
		db.Sighting.findById({ _id: req.params.id })
			.then((dbModel) => dbModel.remove())
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
};
