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
    departureDate: String
    returnDate: String
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
      departureDate: String!
      returnDate: String!
    ): Adventure

    updateAdventure(
      _id: ID!
      destination: String
      country: String
      departureDate: String
      returnDate: String
    ): Adventure

    deleteAdventure(_id: ID!): Adventure

    addOdyssey(
      adventureId: ID!
      title: String!
      description: String!
    ): Adventure

    updateOdyssey(
      adventureID: ID!
      odysseyID: ID!
      title: String
      description: String
      completed: Boolean
    ): Adventure

    deleteOdyssey(adventureId: ID!, odysseyId: ID!): Adventure

    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
