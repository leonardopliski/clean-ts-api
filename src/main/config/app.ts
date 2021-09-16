import setupMiddlewares from './middlewares'
import setupRoutes from './routes'
import setupStaticFiles from './static-files'
import setupSwagger from './swagger'
import express, { Express } from 'express'
import { setupApolloServer } from '../graphql/apollo/apollo-server'

export const setupApp = async (): Promise<Express> => {
  const app = express()
  setupStaticFiles(app)
  setupSwagger(app)
  setupMiddlewares(app)
  setupRoutes(app)
  const apolloServer = await setupApolloServer()
  await apolloServer.start()
  apolloServer.applyMiddleware({ app })
  return app
}
