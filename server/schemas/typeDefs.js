const typeDefs = `
  type User {
    _id: ID
    username: String
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
    user(username: String!): User
    adventure(_id: ID!): Adventure
  }

  type Mutation {
    addUser(username: String!, password: String!): Auth

    addAdventure(
      destination: String!
      country: String!
      startDate: String!
      endDate: String!
    ): Adventure

    updateAdventure(
      _id: ID!
      destination: String
      country: String
      startDate: String
      endDate: String
    ): Adventure

    deleteAdventure(_id: ID!): Adventure

    addOdyssey(
      adventureID: ID!
      title: String!
      description: String!
      completed: Boolean!
    ): Adventure

    updateOdyssey(
      adventureID: ID!
      odysseyID: ID!
      title: String
      description: String
      completed: Boolean
    ): Adventure

    deleteOdyssey(adventureID: ID!, odysseyID: ID!): Adventure

    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
