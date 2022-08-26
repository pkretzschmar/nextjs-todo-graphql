import gql from 'graphql-tag'

export const FETCH_TODO = gql`
  query Todo($_id: ObjectId) {
    todo(query: { _id: $_id }) {
      _id
      content
      status
    }
  }
`
