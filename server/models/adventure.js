const { Schema, model } = require("mongoose");

const adventureSchema = new Schema(
  {
    destination: {
      type: String,
      required: true,
      maxlength: 200,
    },
    country: {
      type: String,
      required: true,
      maxlength: 50,
    },
    departureDate: {
      type: Date,
      default: Date.now,
      get: (dateAdventureVal) => dateAdventureVal.toISOString().split("T")[0],
    },
    returnDate: {
      type: Date,
      default: Date.now,
      get: (dateAdventureVal) => dateAdventureVal.toISOString().split("T")[0],
    },
    odysseys: [
      {
        title: {
          type: String,
          required: true,
          maxlength: 200,
        },
        description: {
          type: String,
          required: true,
          maxlength: 200,
        },
        completed: {
          type: Boolean,
          required: false,
          default: false,
        },
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Adventure = model("Adventure", adventureSchema);

module.exports = Adventure;
