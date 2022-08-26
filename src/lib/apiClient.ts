import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const APP_ID = process.env.ATLAS_APP_ID as string
console.log(APP_ID)
const API_KEY = process.env.ATLAS_API_KEY as string

export const client = new ApolloClient({
  link: new HttpLink({
    uri: `https://realm.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`,
    headers: {
      apiKey: API_KEY
    }
  }),
  cache: new InMemoryCache()
})
