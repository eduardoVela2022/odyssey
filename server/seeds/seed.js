// we need a DB connection
const connection = require('../config/connection');
// we need out datasets and Models
const { User, Adventure } = require('../models');
const usersData = require("./usersData");
const adventuresData = require('./adventuresData');
const odysseysData = require('./odysseysData');
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
   /*
    let odysseyCheck = await connection.db.listCollections({ name: 'odysseys'}).toArray();
    if(odysseyCheck.length) {
        await connection.dropCollection('odysseys');
    } */
    
    // Create The Users
    const newUsers = await User.create({
        username: "Tom",
        email: "tom@gmail.com",
        password: "pass1234"
    },{
        username: "Sarah",
        email: "sarah@gmail.com",
        password: "pass1234"
    }, );
    console.log("Users: ", newUsers);
    // Create the Adventures
    const newAdventures = await Adventure.create({
        destination: "Montreal",
        country: "Canada",
        startDate: "2024-09-09",
        endDate: "2024-09-15",
        odysseys: [
            {
                title: "Trek #1",  
                description: "biking",
                completed: false
            },
            {
                title: "Trek #2",  
                description: "Mountain hike",
                completed: false
            }
        ]
    },
    {
        destination: "Detroit",
        country: "United States",
        startDate: "2024-05-09",
        endDate: "2024-05-15",
        odysseys: []
    },
    {
        destination: "Mexico City",
        country: "Mexico",
        startDate: "2024-08-09",
        endDate: "2024-08-15",
        odysseys: [
            {
                title: "Trek #3",  
                description: "ocean swimming",
                completed: false
            },
            {
                title: "Trek #4",  
                description: "wine tour",
                completed: false
            }
        ]
    },)
    console.log("Adventures: ", newAdventures);

        // --> Add the Aventure_ID to the Associated User

    // Create the Odysseys
        // --> Add the Odysseys to the Associated Adventure

    console.log("Seeding complete")
    process.exit(0)
})