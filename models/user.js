const mongoose = require("mongoose");
const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstName: {
      type: String,
      trim: true,
      required: "First Name is Required"
    },
  
    lastName: {
      type: String,
      trim: true,
      required: "Last Name is Required"
    },
  
    username: {
      type: String,
      trim: true,
      required: "Username is Required"
    },
  
    password: {
      type: String,
      trim: true,
      required: "Password is Required",
      validate: [({ length }) => length >= 6, "Password should be longer."]
    },
  
    email: {
      type: String,
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    
    sightings: [
        {
          type: Schema.Types.ObjectId,
          ref: "Sightings"
        }
      ],
    
    fullName: String
  });
  
  UserSchema.methods.setFullName = function() {
    this.fullName = `${this.firstName} ${this.lastName}`;
  
    return this.fullName;
  };
  
  
  const User = mongoose.model("User", UserSchema);
  
  module.exports = User;