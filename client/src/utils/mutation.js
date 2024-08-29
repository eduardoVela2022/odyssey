// Imports
import { gql } from "@apollo/client";

// Logs in a user
export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

// Add user
export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
    }
  }
`;

// Add adventure
export const ADD_ADVENTURE = gql`
  mutation addAdventure(
    $destination: String!
    $country: String!
    $departureDate: String!
    $returnDate: String!
  ) {
    addAdventure(
      destination: $destination
      country: $country
      departureDate: $departureDate
      returnDate: $returnDate
    ) {
      _id
    }
  }
`;

// Delete adventure
export const DELETE_ADVENTURE = gql`
  mutation deleteAdventure($_id: ID!) {
    deleteAdventure(_id: $_id) {
      _id
    }
  }
`;

// // Add odyssey
export const ADD_ODYSSEY = gql`
  mutation addOdyssey(
    $adventureId: ID!
    $title: String!
    $description: String!
  ) {
    addOdyssey(
      adventureId: $adventureId
      title: $title
      description: $description
    ) {
      _id
    }
  }
`;

// // Delete odyssey
export const DELETE_ODYSSEY = gql`
  mutation deleteOdyssey($adventureId: ID!, $odysseyId: ID!) {
    deleteOdyssey(adventureId: $adventureId, odysseyId: $odysseyId) {
      _id
    }
  }
`;
