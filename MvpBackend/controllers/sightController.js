var SightModel = require("../models/sightModel.js");

var getAllSights = async (req, res) => {
  try {
    const sight = await SightModel.find();
    res.json(sight);
  } catch (e) {
    console.log(e);
  }
};

var postSight = async (req, res) => {
  try {
    const { name, image, description, price, city } = req.body;
    const sight = new SightModel({
      name,
      image,
      description,
      price,
      city,
    });
    const savedSight = await sight.save();
    res.status(201).json(savedSight);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a new sight" });
  }
};

module.exports = {
  getAllSights,
  postSight,
};
