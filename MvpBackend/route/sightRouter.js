const router = require("express").Router();
var sightController = require("../controllers/sightController.js");

router.get("/", sightController.getAllSights);
router.post("/", sightController.postSight);
router.get("/:city", sightController.getSightByCity);

module.exports = router;
