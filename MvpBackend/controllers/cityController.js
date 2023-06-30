var CityModel = require("../models/cityModel.js");

var getAllCities = async (req, res) => {
  try {
    const city = await CityModel.find();
    res.json(city);
  } catch (e) {
    console.log(e);
  }
};

var postCity = async (req, res) => {
  try {
    const { name, image } = req.body;
    const city = new CityModel({
      name,
      image,
    });
    const savedCity = await city.save();
    res.status(201).json(savedCity);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a new city" });
  }
};

module.exports = {
  getAllCities,
  postCity,
};
