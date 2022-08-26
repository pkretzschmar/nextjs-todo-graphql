// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { FETCH_TODO } from '@/graphql/queries/FetchTodo'
import { client } from '@/lib/apiClient'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await client.query({
    query: FETCH_TODO,
    variables: {
      _id: '1'
    }
  })
  const { data } = response
  if (data) {
    res.status(200).json({ ...data })
  } else {
    res.status(500).json({ ...data })
  }
}
