const gql = require('graphql-tag')

const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String
    parkCount: Int
    savedParks: [Park]
  }

  type Park {
    activities: [String]
    addresses: String
    comments: [String]
    contacts: String
    description: String
    designation: String
    directionsInfo: String
    directionsUrl: String
    entranceFees: Float
    entrancePasses: String
    images: String
    latLong: Location
    name: String
    operatingHours: OperatingHours
    states: String
    topics: [String]
    url: String
    weatherInfo: String
  }

  type Location {
    latitude: String
    longitude: String
  }

  type OperatingHours {
    opening: String
    closing: String
  }

  type Auth {
    token: String!
    user: User
  }

  input ParkInput {
    activities: [String]
    addresses: String
    comments: [String]
    contacts: String
    description: String
    designation: String
    directionsInfo: String
    directionsUrl: String
    entranceFees: Float
    entrancePasses: String
    images: String
    latLong: LocationInput
    name: String
    operatingHours: OperatingHoursInput
    states: String
    topics: [String]
    url: String
    weatherInfo: String
  }

  input LocationInput {
    latitude: String
    longitude: String
  }

  input OperatingHoursInput {
    opening: String
    closing: String
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    savePark(parkData: ParkInput!): User
    removePark(parkId: ID!): User
  }
`;

module.exports = typeDefs;
