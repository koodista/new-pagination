const express = require("express");
const bikejourneyControllersStations = require("../controllers/bikejourneyControllersStations");
const router = express.Router();

// @route - /api/bikejourneys/
router
  .route("/")
  .get(bikejourneyControllersStations.getAllBikejourneysStations)
  .post(bikejourneyControllersStations.createNewBikejourneyStations);

//@route - /api/bikejourneys/filter
router
  .route("/filter")
  .get(bikejourneyControllersStations.filterAllBikejourneysStations);

// @route - /api/bikejourneys/id
router
  .route("/:id")
  .put(bikejourneyControllersStations.updateBikejourneyByIdStations)
  .delete(bikejourneyControllersStations.deleteBikejourneyByIdStations);

module.exports = router;