// we need a DB connection
const connection = require('../config/connection');
// we need out datasets and Models
const { User, Adventure } = require('../models');
const usersData = require("./usersData");
const adventuresData = require('./adventuresData');
// figure out the ODER we need to ADD the data --> Associations

// Error Checking 
connection.on('error', (err) => console.log("Err: ", err));
// Database connection
connection.once('open', async () => {
    // First we check for existing data and DROP the CURRENT DATA and COLLECTIONS
    let usersCheck = await connection.db.listCollections({ name: 'users'}).toArray();
    if(usersCheck.length) {
        await connection.dropCollection('users');
    }

    let adventuresCheck = await connection.db.listCollections({ name: 'adventures'}).toArray();
    if(adventuresCheck.length) {
        await connection.dropCollection('adventures');
    }
const users = await User.create(usersData)
    
    for (let i=0; i<adventuresData.length; i++) {
        const {_id}=await Adventure.create(adventuresData[i])
        let user = await User.findOneAndUpdate(
            {_id:users[i]._id},
            {
                $addToSet: {
                    adventures: _id
                }
            }

        )
    }
  

    console.log("Seeding complete")
    process.exit(0)
})