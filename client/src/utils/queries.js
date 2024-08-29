// Imports
import { gql } from "@apollo/client";

// Get a user and his or her adventures
export const QUERY_USER_ADVENTURES = gql`
  query user($username: String!) {
    user(username: $username) {
      adventures {
        _id
        destination
        country
        departureDate
        returnDate
      }
    }
  }
`;

// Get a single user adventure
export const QUERY_ADVENTURE = gql`
  query adventure($_id: ID!) {
    adventure(_id: $_id) {
      _id
      destination
      country
      departureDate
      returnDate
    }
  }
`;
