import gql from 'graphql-tag'

export const UPDATE_TODO = gql`
  mutation UpdateOneTodo($_id: String, $content: String, $status: Boolean) {
    updateOneUser(
      query: { _id: $_id }
      set: { content: $firstName, status: $lastName }
    ) {
      _id
      content
      status
    }
  }
`
