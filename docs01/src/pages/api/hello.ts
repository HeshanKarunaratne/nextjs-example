// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  age: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const result = "Hello"
    res.status(200).send({ result })
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}
