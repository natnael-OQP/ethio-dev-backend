const { gql } = require('apollo-server')

exports.typeDefs = gql`
    type User {
        name: String!
        username: String!
        photo: String
        coverImage: String
        email: String
        age: Int
        bio: String
        isEmployee: String
        education: String
        work: String
    }

    type Query {
        users: [User]
    }
`
