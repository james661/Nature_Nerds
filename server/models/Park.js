

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedparks` array in User.js
const { Schema } = require('mongoose');

// this object belongs to parkSchema
const addressSchema = new Schema({
  postalCode: {
    type: String,
  },
  city: {
    type: String,
  },
  stateCode: {
    type: String,
  },
});


const parkSchema = new Schema({
  activities: [
    {
      type: String,
    },
  ],
  addresses: {
    type: addressSchema,
    required: true,
  },
  comments: [
    {
      type: String,
    },
  ],
  contacts: {
    type: String,
  },
  description: {
    type: String,
  },
  designation: {
    type: String,
  },
  directionsInfo: {
    type: String,
  },
  directionsUrl: {
    type: String,
  },
  entranceFees: {
    type: String,
  },
  entrancePasses: {
    type: String,
  },
  images: {
    type: String,
  },
  latLong: {
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
  },
  name: {
    type: String,
  },
  operatingHours: {
    opening: {
      type: Date,
    },
    closing: {
      type: Date,
    },
  },
  states: {
    type: String,
  },
  topics: [
    {
      type: String,
    },
  ],
  url: {
    type: String,
  },
  weatherInfo: {
    type: String,
  },
});

module.exports = parkSchema;
