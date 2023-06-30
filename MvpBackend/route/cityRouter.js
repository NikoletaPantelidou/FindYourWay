const router = require("express").Router();
var cityController = require("../controllers/cityController.js");

router.get("/", cityController.getAllCities);
router.post("/", cityController.postCity);

module.exports = router;
