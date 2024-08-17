const typeDefs = `

type User {
    _id: ID,
    username: String,
    email: String
}


type Query {
    getAllUsers: [User]
}

`

module.exports = typeDefs