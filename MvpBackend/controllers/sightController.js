var SightModel = require("../models/sightModel.js");

var getAllSights = async (req, res) => {
  try {
    const sight = await SightModel.find();
    res.json(sight);
  } catch (error) {
    res.status(500).json({ error: `${error}` });
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
    res.status(500).json({ error: `${error}` });
  }
};

var getSightByCity = async (req, res) => {
  try {
    const sight = await SightModel.find({ city: req.params.city });
    res.json(sight);
  } catch (error) {
    res.status(500).json({ error: `${error}` });
  }
};

module.exports = {
  getAllSights,
  postSight,
  getSightByCity,
};
