const express = require("express");
const bikejourneyControllersJune = require("../controllers/bikejourneyControllersJune");
const router = express.Router();

// @route - /api/bikejourneys/
router
  .route("/")
  .get(bikejourneyControllersJune.getAllBikejourneysJune)
  .post(bikejourneyControllersJune.createNewBikejourneyJune);

//@route - /api/bikejourneys/filter
router
  .route("/filter")
  .get(bikejourneyControllersJune.filterAllBikejourneysJune);

// @route - /api/bikejourneys/id
router
  .route("/:id")
  .put(bikejourneyControllersJune.updateBikejourneyByIdJune)
  .delete(bikejourneyControllersJune.deleteBikejourneyByIdJune);

module.exports = router;