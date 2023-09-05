import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    me {
      parkCount
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
        name
        operatingHours {
          opening
          closing
        }
        states
        topics
        url
        weatherInfo
        latLong {
          latitude
          longitude
        }
      }
    }
  };`

//   token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoidGF0aSIsImVtYWlsIjoidGhpc0Bwb2ludC5ibGFuayIsIl9pZCI6IjY0ZDI4MDRlNzQ5N2U3N2FiYTQ1Y2ZmZCJ9LCJpYXQiOjE2OTE1MTczNDcsImV4cCI6MTY5MTUyNDU0N30.XlMopHWcjIKhajI4ZjzdV2cxK6IeYf9s_dddTn8AhHs"

// email: "this@point.blank"
