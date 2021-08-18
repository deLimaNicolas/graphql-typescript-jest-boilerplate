import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import depthLimit from 'graphql-depth-limit'
import compression from 'compression'
import cors from 'cors'
import schema from './schema'

const app = express()

const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
})

app.use(cors({ origin: "*" }))
app.use(compression())
server.applyMiddleware({ app, path: '/graphql' })

export default app
