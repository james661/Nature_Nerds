import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_PARK = gql`
  mutation savePark($parkData: ParkInput!) {
    savePark(parkData: $parkData) {
      _id
      username
      email
      savedParks {
        activities
        addresses
        comments
        contacts
        description
        designation
        directionsInfo
        directionsUrl
        entranceFees
        entrancePasses
        images
        latLong
        name
        operatingHours
        states
        topics
        url
        weatherInfo
      }
    }
  }
`;

export const REMOVE_PARK = gql`
  mutation removePark($parkId: ID!) {
    removePark(parkId: $parkId) {
      _id
      username
      email
      savedParks {
        activities
        addresses
        comments
        contacts
        description
        designation
        directionsInfo
        directionsUrl
        entranceFees
        entrancePasses
        images
        latLong
        name
        operatingHours
        states
        topics
        url
        weatherInfo
      }
    }
  }
`;
