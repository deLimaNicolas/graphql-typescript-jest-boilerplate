import app from './app'
import { createServer } from 'http'

const httpServer: any = createServer(app)

const PORT = process.env.PORT || 3000

httpServer.listen({ port: PORT }, (): void =>
console.log( `\n🚀GraphQL is now running on http://localhost:3000/graphql`))
