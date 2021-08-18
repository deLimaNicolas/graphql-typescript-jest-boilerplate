import graphQLRequest from '../utils/graphRequest'

it('should test graphQl structure by printing mutation word!', async () => {
     const requestResponse = await graphQLRequest(`mutation { printSomething(word: "this test is fu***ing working!") }`)

     const {
          body: {
               data: {
                    printSomething
               }
          }
     } = requestResponse

     expect(printSomething).toBe('Printing word: this test is fu***ing working!')
})