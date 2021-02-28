const mongoose = require("mongoose");
const Schema = mongoose.Schema

const sightingSchema = new Schema({
    username: {
        type: String,
        trim: true,
    },
    title: {
        type: String, 
        trim: true,
        required: "Please enter a title for your sighting."
    },
    address: {
        type: String,
        trim: true
    },
    city: {
        type: String, 
        trim: true,
        required: "Please enter a city name.",
    },
    state: {
        type: String,
        trim: true, 
        required: true,
    },
    description: {
        type: String,
        trim: true,
    }, 
    imageUrl: {
        type: String,
        trim: true,
    },
    latitude: {
        type: Number,
        trim: true,
    }, 
    longitude: {
        type: Number,
        trim: true,
    }, 
    date: {
        type: Date, 
        default: Date.now,
    }

});

const Sighting = mongoose.model("Sightings", sightingSchema);

module.exports = Sighting;