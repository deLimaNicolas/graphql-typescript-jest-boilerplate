import app from './app'
import { createServer, Server } from 'http'

const httpServer: Server = createServer(app)

const PORT = process.env.PORT || 3000

httpServer.listen({ port: PORT }, (): void =>
	console.log(`\n🚀GraphQL is now running on http://localhost:${PORT}/graphql`))
