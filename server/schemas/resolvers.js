const { User, Adventure } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("adventures");
    },
    adventure: async (parent, { _id }) => {
      return Adventure.findOne({ _id });
    },
  },

  Mutation: {
    addUser: async (parent, { username, password }) => {
      const user = await User.create({ username, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials.");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials.");
      }

      const token = signToken(user);
      return { token, user };
    },

    addAdventure: async (
      parent,
      { destination, country, startDate, endDate },
      { user }
    ) => {
      if (!user) {
        throw new AuthenticationError("You need to be logged in!");
      }
      const parseStartDate = Date.parse(startDate);
      const parseEndDate = Date.parse(endDate);
      const adventure = await Adventure.create({
        destination,
        country,
        startDate: parseStartDate,
        endDate: parseEndDate,
        userId: user._id,
      });

      await User.findByIdAndUpdate(user._id, {
        $push: { adventures: adventure._id },
      });

      return adventure;
    },

    updateAdventure: async (
      parent,
      { _id, destination, country, startDate, endDate },
      { user }
    ) => {
      if (!user) {
        throw new AuthenticationError("You need to be logged in!");
      }
      const parseStartDate = Date.parse(startDate);
      const parseEndDate = Date.parse(endDate);
      const adventure = await Adventure.findOneAndUpdate(
        { _id, userId: user._id },
        {
          destination,
          country,
          startDate: parseStartDate,
          endDate: parseEndDate,
        },
        { new: true }
      );

      if (!adventure) {
        throw new AuthenticationError("No adventure found with this ID");
      }

      return adventure;
    },

    deleteAdventure: async (parent, { _id }, { user }) => {
      if (!user) {
        throw new AuthenticationError("You need to be logged in!");
      }

      const adventure = await Adventure.findOneAndDelete({
        _id,
        userId: user._id,
      });

      if (!adventure) {
        throw new AuthenticationError("No adventure found with this ID");
      }

      await User.findByIdAndUpdate(user._id, { $pull: { adventures: _id } });

      return adventure;
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
  },
};

module.exports = resolvers;
