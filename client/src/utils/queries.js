// Imports
import { gql } from "@apollo/client";

// Get a user with its adventures
export const QUERY_USER = gql`
 query user($username: String!) {
    user(username: $username) {
        _id
        username
        email
        adventures {
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
 }
`;

// Get a single user adventure
export const QUERY_ADVENTURE = gql`
query adventure($_id: ID!) {
    adventure(_id: $_id) {
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
