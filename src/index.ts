import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import express from 'express'
import http from 'http'
import 'dotenv/config'

// import graphql schema and resolver
import resolvers from './graphql/resolvers/index'
import typeDefs from './graphql/schema/index'
// import mongodb connection
import dbConnection from './util/dbConnection'

async function startApolloServer(typeDefs: any, resolvers: any) {
    const app = express()
    const httpServer = http.createServer(app)
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        csrfPrevention: true,
        cache: 'bounded',
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    })
    await server.start()
    server.applyMiddleware({ app })
    await new Promise<void>((resolve) =>
        httpServer.listen({ port: 4000 }, resolve)
    )
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
}

dbConnection()
    .then(() => startApolloServer(typeDefs, resolvers))
    .catch((err) => console.log(err))
