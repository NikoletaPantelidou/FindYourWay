const mongoose = require("mongoose");

const sightSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

const Sight = mongoose.model("Sight", sightSchema);
module.exports = Sight;
