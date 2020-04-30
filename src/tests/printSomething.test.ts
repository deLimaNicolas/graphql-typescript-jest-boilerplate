import graphQLRequest from '../utils/graphRequest'

it('should test graphQl structure by printing mutation word!', async ()=>{
     const printSomething = await graphQLRequest(`mutation { printSomething(word: "this test is fu***ing working!") }`)
     expect(printSomething.body.data.printSomething).toBe('Printing word: this test is fu***ing working!')
})