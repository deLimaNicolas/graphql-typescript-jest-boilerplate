import graphQLRequest from '../utils/graphRequest'

it('should test graphQl structure by printing hello world!', async ()=>{
     const helloWorld = await graphQLRequest(`query { helloWorld }`)
     expect(helloWorld.body.data.helloWorld).toBe('👋 Hello world! 👋')
})