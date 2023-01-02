const mongoose = require("mongoose");
const { MongoClient } = require('mongodb')

const bikejourneyJuneSchema = new mongoose.Schema({
  departure: {
    type: Date,  
  },
  return: {
    type: Date,    
  },
  departureStationId: {
    type: Number,   
  },
  departureStationName: {
    type: String,  
  },
  returnStationId: {
    type: Number,  
  },
  returnStationName: {
    type: String,    
  },
  distance: {
    type: Number,   
  },
  duration: {
    type: Number,  
  }, 
}, { collection: '202106'});

const BikejourneyJune = mongoose.model("BikejourneyJune", bikejourneyJuneSchema);

module.exports = BikejourneyJune;
