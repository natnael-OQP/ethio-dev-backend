import { gql } from 'apollo-server-express'

const typeDefs = gql`
    type User {
        name: String!
        username: String!
        email: String!
        photo: String
        coverImage: String
        age: Int
        bio: String
        isEmployee: String
        education: String
        work: String
        links: [Link]
        following: [Follow]
        follower: [Follow]
    }

    type Link {
        userId: ID!
        name: String!
        url: String!
    }

    type Follow {
        userId: ID!
        name: String!
        url: String!
    }

    type Query {
        users: [User]
    }
`
export default typeDefs
