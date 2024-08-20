const { Schema, model, Types } = require('mongoose');

const adventureSchema = new Schema (
    {
    adventureId: {
        type: Schema.Types.ObjectId(),
        default: () => new Types.ObjectId(),
    },
    destinationBody: {
        type: String,
        require: true,
        maxlenght: 200,
    },
    country: {
        type: String,
        require: true,
        maxlenght: 3,
    },
    dateAdventure: {
        type: Date,
        default: Date.now,
        get: (dateAdventureVal) => dateFormat(dateAdventureVal),
    },
},
{
    toJSON: {
        getters: true,
    },
}
);

const Adventure = model('Adventure', adventureSchema);

module.exports = Adventure;



      // Adventure:
// Id (MongoDB default)
// Destination: string
// Country: string
// Date of adventure: date
// Odysseys [Odyssey]








