import { IResolvers } from 'graphql-tools';
const resolverMap: IResolvers = {
    Mutation: {
      printSomething(_: void, args: any): string {
        console.log("Enter")
        console.log('Inserting in Database --  fake')
        return `Printing word: ${args.word}`
      },
    },
  };
export default resolverMap;