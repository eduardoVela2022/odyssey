// Imports
import { gql } from "@apollo/client";

// Checks if the username and password are valid
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
    mutation addAdventure($destination: String!, $country: String!, $startDate: String!, $endDate: String!) {
        addAdventure(destination: $destination, country: $country, startDate: $startDate, endDate: $endDate){
            _id
            destination
            country
            startDate
            endDate
            odysseys {
                _id
                title
                description
                completed
            }
        }
    }
`;

// Update adventure
export const UPDATE_ADVENTURE = gql`
    mutation addAdventure($_id: ID!, $destination: String!, $country: String!, $startDate: String!, $endDate: String!) {
        updateAdventure(_id: $_id, destination: $destination, country: $country, startDate: $startDate, endDate: $endDate){
            _id
            destination
            country
            startDate
            endDate
            odysseys {
                _id
                title
                description
                completed
            }
        }
    }
`;

// Delete adventure
export const DELETE_ADVENTURE = gql`
    mutation deleteAdventure($_id: ID!) {
        deleteAdventure(_id: $_id){
            _id
            destination
            country
            startDate
            endDate
            odysseys {
                _id
                title
                description
                completed
            }
        }
    }
`;

// // Add odyssey
// export const ADD_ODYSSEY = gql`

// `;

// // Update odyssey
// export const UPDATE_ODYSSEY = gql``;

// // Delete odyssey
// export const DELETE_ODYSSEY = gql``;
