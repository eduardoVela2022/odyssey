// Imports
const { User, Adventure } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  // Queries
  Query: {
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("adventures");
    },
    adventure: async (parent, { _id }) => {
      return Adventure.findOne({ _id });
    },
  },

  // Mutations
  Mutation: {
    // Add user
    addUser: async (parent, { username, password }) => {
      // User is created
      const user = await User.create({ username, password });
      // Log in token is created
      const token = signToken(user);
      // Returns log in token and the created user
      return { token, user };
    },

    // Add adventure
    addAdventure: async (
      parent,
      { destination, country, departureDate, returnDate },
      context
    ) => {
      // Checks if user is logged in
      if (context.user) {
        // Transforms date objects into strings
        const parseDepartureDate = Date.parse(departureDate);
        const parseReturnDate = Date.parse(returnDate);

        // Adventure is created
        const adventure = await Adventure.create({
          destination,
          country,
          departureDate: parseDepartureDate,
          returnDate: parseReturnDate,
        });

        // Updates the user's adventure list
        await User.findByIdAndUpdate(context.user._id, {
          $addToSet: { adventures: adventure._id },
        });

        // Returns the created adventure
        return adventure;
      }

      // If user isn't logged in, throw authentication error
      throw new AuthenticationError("You need to be logged in!");
    },

    // Update adventure
    updateAdventure: async (
      parent,
      { _id, destination, country, departureDate, returnDate },
      context
    ) => {
      // Checks if user is logged in
      if (context.user) {
        // Transforms date objects into strings
        const parseDepartureDate = Date.parse(departureDate);
        const parseReturnDate = Date.parse(returnDate);

        // Adventure is updated
        const adventure = await Adventure.findByIdAndUpdate(
          _id,
          {
            destination,
            country,
            departureDate: parseDepartureDate,
            returnDate: parseReturnDate,
          },
          { new: true }
        );

        // If adventure doesn't exist, throw authentication error
        if (!adventure) {
          throw new AuthenticationError("No adventure found with this ID");
        }

        // Return the updated adventure
        return adventure;
      }

      // If user isn't logged in, throw authentication error
      throw new AuthenticationError("You need to be logged in!");
    },

    // Delete adventure
    deleteAdventure: async (parent, { _id }, context) => {
      // Checks if user is logged in
      if (context.user) {
        // Deletes the adventure that has the given id
        const adventure = await Adventure.findOneAndDelete(_id);

        // If adventure doesn't exist, throw authentication error
        if (!adventure) {
          throw new AuthenticationError("No adventure found with this ID");
        }

        // Removes the deleted adventure from the adventures list of its user
        await User.findByIdAndUpdate(context.user._id, {
          $pull: { adventures: _id },
        });

        // Return the deleted adventure
        return adventure;
      }

      // If user isn't logged in, throw authentication error
      throw new AuthenticationError("You need to be logged in!");
    },

    addOdyssey: async (
      parent,
      { adventureID, title, description, completed },
      { user }
    ) => {
      if (!user) {
        throw new AuthenticationError("You need to be logged in!");
      }

      const adventure = await Adventure.findOneAndUpdate(
        { _id: adventureID, userId: user._id },
        { $push: { odysseys: { title, description, completed } } },
        { new: true }
      );

      if (!adventure) {
        throw new AuthenticationError("No adventure found with this ID");
      }

      return adventure;
    },

    updateOdyssey: async (
      parent,
      { adventureID, odysseyID, title, description, completed },
      { user }
    ) => {
      if (!user) {
        throw new AuthenticationError("You need to be logged in!");
      }

      const adventure = await Adventure.findOneAndUpdate(
        { _id: adventureID, userId: user._id, "odysseys._id": odysseyID },
        { $set: { "odysseys.$": { title, description, completed } } },
        { new: true }
      );

      if (!adventure) {
        throw new AuthenticationError(
          "No adventure or odyssey found with this ID"
        );
      }

      return adventure;
    },

    deleteOdyssey: async (parent, { adventureID, odysseyID }, { user }) => {
      if (!user) {
        throw new AuthenticationError("You need to be logged in!");
      }

      const adventure = await Adventure.findOneAndUpdate(
        { _id: adventureID, userId: user._id },
        { $pull: { odysseys: { _id: odysseyID } } },
        { new: true }
      );

      if (!adventure) {
        throw new AuthenticationError("No adventure found with this ID");
      }

      return adventure;
    },

    // Logs in a user
    login: async (parent, { username, password }) => {
      // Finds the user with the given username
      const user = await User.findOne({ username });

      // If the user doesn't exists, throw authentication error
      if (!user) {
        throw new AuthenticationError("Incorrect credentials.");
      }

      // Checks if the password is correct
      const correctPassword = await user.isCorrectPassword(password);

      // If the password is not correct, throw authentication error
      if (!correctPassword) {
        throw new AuthenticationError("Incorrect credentials.");
      }

      // Log in token is created
      const token = signToken(user);

      // Returns log in token and user
      return { token, user };
    },
  },
};

// Exports
module.exports = resolvers;
