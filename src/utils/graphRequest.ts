import app from '../app'
import supertest from 'supertest'

const graphQLRequest = (query: any, variables: any = null) => {
    return supertest(app)
      .post('/graphql')
      .send({
        variables,
        query
      })
  }

export default graphQLRequest