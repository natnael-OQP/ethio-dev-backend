const { ApolloServer, gql } = require('apollo-server')
const { typeDefs } = require('./schema')
const { resolvers } = require('./resolvers')
const dbConnection = require('./util/dbConnection')

dbConnection()

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
})

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})
