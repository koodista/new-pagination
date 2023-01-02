const express = require("express");
const bikejourneyControllersJuly = require("../controllers/bikejourneyControllersJuly");
const router = express.Router();

// @route - /api/bikejourneys/
router
  .route("/")
  .get(bikejourneyControllersJuly.getAllBikejourneysJuly)
  .post(bikejourneyControllersJuly.createNewBikejourneyJuly);

//@route - /api/bikejourneys/filter
router
  .route("/filter")
  .get(bikejourneyControllersJuly.filterAllBikejourneysJuly);

// @route - /api/bikejourneys/id
router
  .route("/:id")
  .put(bikejourneyControllersJuly.updateBikejourneyByIdJuly)
  .delete(bikejourneyControllersJuly.deleteBikejourneyByIdJuly);

module.exports = router;