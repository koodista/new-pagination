const mongoose = require("mongoose");
const { MongoClient } = require('mongodb')

const bikejourneyJulySchema = new mongoose.Schema({
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
}, { collection: '202107'});

const BikejourneyJuly = mongoose.model("BikejourneyJuly", bikejourneyJulySchema);

module.exports = BikejourneyJuly;
