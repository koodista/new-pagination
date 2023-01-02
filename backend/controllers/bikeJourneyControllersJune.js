const BikejourneyJune = require('../models/BikejourneyJune')
const asyncHandler = require('../middleware/asyncHandler');
const ErrorResponse = require('../utils/errorResponse');
const { isValidObjectId } = require('mongoose');



exports.getAllBikejourneysJune = asyncHandler(async (req, res, next) => {
  //const bikejourneys = await Bikejourney.find();

  let query = BikejourneyJune.find();

  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.limit) || 50;
  const skip = (page - 1) * pageSize;
  const total = await BikejourneyJune.countDocuments();

  const pages = Math.ceil(total / pageSize);

  query = query.skip(skip).limit(pageSize);

  if(page > pages) {
    return res.status(404).json({
      status: 'Failed',
      message: 'No page found'
    })
  }

  const result = await query;

  res.status(200).json({
      status: 'success',                //success: true,
      count: result.length,             //data: bikejourneys
      page,
      pages,
      data: result
                                                                                  
  })
});

exports.filterAllBikejourneysJune = asyncHandler(async (req, res, next) => {    //mongodb query language

  let query;

  const reqQuery = { ...req.query };

  const removeFields = ["sort"];

  //console.log(reqQuery);

  removeFields.forEach(param => delete reqQuery[param]);           //[param or val] //delete key=value pair from an object

  //console.log(reqQuery);

  let queryStr = JSON.stringify(reqQuery);

  //console.log(queryStr);

  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`);

  //console.log(queryStr);

  query = BikejourneyJune.find(JSON.parse(queryStr));

  if (req.query.sort) {
    const sortByArr = req.query.sort.split(',');

    const sortByStr = sortByArr.join(' ');

    query = query.sort(sortByStr);
  } else {
    query = query.sort('-duration')
  }

  //                                          {"duration":{"$lte":"50"}}
  //const bikejourneys = await Bikejourney.find(JSON.parse(queryStr));
  const bikejourneysJune = await query;
  
  res.status(200).json({
    status: 'success',
    data: bikejourneysJune
  })
});

exports.createNewBikejourneyJune = asyncHandler(async (req, res, next) => {
  const bikejourney = await BikejourneyJune.create(req.body);

  res.status(201).json({
    success: true,
    data: bikejourneyJune
  })
});

exports.updateBikejourneyByIdJune = asyncHandler(async (req, res, next) => {
  let bikejourneyJune = await BikejourneyJune.findById(req.params.id);

  if(!bikejourneyJune) {
    return next(new ErrorResponse(`Journey with id ${req.params.id} was not found`, 404))
  }

  bikejourney = await BikejourneyJune.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true});

  res.status(201).json({
    success: true,
    data: bikejourneyJune
  })
});

exports.deleteBikejourneyByIdJune = asyncHandler(async (req, res, next) => {
  let bikejourneyJune = await BikejourneyJune.findById(req.params.id);

  if(!bikejourneyJune) {
    return next(new ErrorResponse(`Journey with id ${req.params.id} was not found`, 404))
  }

  await bikejourneyJune.remove();

  res.status(200).json({
    success: true,
    data: bikejourneyJune
  })

});



// const Bikejourney = require("../models/Bikejourney");
// const asyncHandler = require("../middleware/asyncHandler");
// const ErrorResponse = require("../utils/errorResponse");




// exports.getAllBikejourneys = asyncHandler(async (req, res, next) => {


//   // const cursor = client.db("Solita").collection("202105").find(
//   //   const bikejourneys = client.db("Solita").collection("202105").find()
//   //   async function findJourneysWithMinimumDuration(client, {
//   //     const results = await cursor.toArray();

//   //     res.status(200).json({
//   //       success: true,
//   //       data: bikejourneys,
//   //       //uiValues,
//   //     });
//   //   });
//   // let query;

//   // let uiValues = {
//   //   filtering: {},
//   //   sorting: {},
//   // };

//   // const reqQuery = { ...req.query };

//   // const removeFields = ["sort"];

//   // removeFields.forEach((val) => delete reqQuery[val]);

//   // const filterKeys = Object.keys(reqQuery);
//   // const filterValues = Object.values(reqQuery);

//   // filterKeys.forEach(
//   //   (val, idx) => (uiValues.filtering[val] = filterValues[idx])
//   // );

//   // let queryStr = JSON.stringify(reqQuery);

//   // queryStr = queryStr.replace(
//   //   /\b(gt|gte|lt|lte|in)\b/g,
//   //   (match) => `$${match}`
//   // );

//   // query = Bootcamp.find(JSON.parse(queryStr));

//   // if (req.query.sort) {
//   //   const sortByArr = req.query.sort.split(",");

//   //   sortByArr.forEach((val) => {
//   //     let order;

//   //     if (val[0] === "-") {
//   //       order = "descending";
//   //     } else {
//   //       order = "ascending";
//   //     }

//   //     uiValues.sorting[val.replace("-", "")] = order;
//   //   });

//   //   const sortByStr = sortByArr.join(" ");

//   //   query = query.sort(sortByStr);
//   // } else {
//   //   query = query.sort("-price");
//   // }

//   // const bootcamps = await query;

//   // const maxPrice = await Bootcamp.find()
//   //   .sort({ price: -1 })
//   //   .limit(1)
//   //   .select("-_id price");

//   // const minPrice = await Bootcamp.find()
//   //   .sort({ price: 1 })
//   //   .limit(1)
//   //   .select("-_id price");

//   // uiValues.maxPrice = maxPrice[0].price;
//   // uiValues.minPrice = minPrice[0].price;
//   //const client = new MongoClient(connString);
  

//   //let bikejourneys = await Bikejourney.find(req.params.id);
// const bikejourneys = await Bikejourney.find();
  

//   res.status(200).json({
//     success: true,
//     data: bikejourneys,
//     //uiValues,
//   });
// });

// exports.createNewBikejourney = asyncHandler(async (req, res, next) => {
//   const bikejourney = await Bikejourney.create(req.body);

//   res.status(201).json({
//     success: true,
//     data: bikejourney,
//   });
// });

// exports.updateBikejourneyById = asyncHandler(async (req, res, next) => {
//   let bikejourney = await Bikejourney.findById(req.params.id);

//   if (!bikejourney) {
//     return next(
//       new ErrorResponse(`bikejourney with id ${req.params.id} was not found`, 404)
//     );
//   }

//   bikejourney = await Bikejourney.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//     runValidators: true,
//   });

//   res.status(201).json({
//     success: true,
//     data: bikejourney,
//   });
// });

// exports.deleteBikejourneyById = asyncHandler(async (req, res, next) => {
//   let bikejourney = await Bikejourney.findById(req.params.id);

//   if (!bikejourney) {
//     return next(
//       new ErrorResponse(`bikejourney with id ${req.params.id} was not found`, 404)
//     );
//   }

//   await bikejourney.remove();

//   res.status(200).json({
//     success: true,
//     data: {},
//   });
// });
