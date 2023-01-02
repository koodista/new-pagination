const mongoose = require("mongoose");
const { MongoClient } = require('mongodb')

const bikejourneyStationsSchema = new mongoose.Schema({
  FID: {
    type: Number,  
  },
  ID: {
    type: Number,    
  },
  name: {
    type: String,   
  },
  address: {
    type: String,  
  },
  city: {
    type: String,  
  },
  capacity: {
    type: Number,    
  },
  x: {
    type: Number,   
  },
  y: {
    type: Number,  
  }, 
}, { collection: 'stations'});

const BikejourneyStations = mongoose.model("BikejourneyStations", bikejourneyStationsSchema);

module.exports = BikejourneyStations;
