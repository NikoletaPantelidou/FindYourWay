const router = require("express").Router();
var sightController = require("../controllers/sightController.js");

router.get("/", sightController.getAllSights);
router.post("/", sightController.postSight);

module.exports = router;
