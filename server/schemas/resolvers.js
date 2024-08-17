// like our CONTROLLER LOGIC --> Where we query our Database for information and send it back to the CLIENT



const resolvers = {

    getAllUsers: async (parent, args) => {
        // this is the LOGIC to FETCH all Users from our MONGO DB database
        let users = await User.find({})

        return users 
    }
}