import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { year, month } = req.query
  const apiKey = process.env.NYT_API_KEY

  if (!year || !month || !apiKey) {
    return res.status(400).json({ error: 'Missing parameters or API key' })
  }

  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/archive/v1/${year}/${month}.json?api-key=${apiKey}`
    )
    if (!response.ok) {
      throw new Error(`NYT API error: ${response.status}`)
    }
    const data = await response.json()
    res.status(200).json(data)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to fetch NYT data' })
  }
}
