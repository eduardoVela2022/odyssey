const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    adventures: [Adventure]!
  }

  type Adventure {
    _id: ID
    destination: String
    country: String
    startDate: String
    endDate: String
    odysseys: [Odyssey]!
  }

  type Odyssey {
    _id: ID
    title: String
    description: String
    completed: Boolean
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    myAdventures: [Adventure]
    adventure(_id: ID!): Adventure
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addAdventure(
      destination: String!
      country: String
      startDate: String
      endDate: String
    ): Adventure
    updateAdventure(
      _id: ID!
      destination: String
      country: String
      startDate: String
      endDate: String
    ): Adventure
    deleteAdventure(_id: ID!): Adventure
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
