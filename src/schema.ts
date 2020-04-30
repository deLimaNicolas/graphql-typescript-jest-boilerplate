import 'graphql-import-node';
import typeDefs from './schemas/allSchemas';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers/allResolvers';
import { GraphQLSchema } from 'graphql';
const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;