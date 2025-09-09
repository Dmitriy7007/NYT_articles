export const handler = async event => {
  const { year, month } = event.queryStringParameters as {
    year?: string
    month?: string
  }

  const apiKey = process.env.NYT_API_KEY

  if (!year || !month || !apiKey) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing parameters or API key' }),
    }
  }

  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/archive/v1/${year}/${month}.json?api-key=${apiKey}`
    )

    if (!response.ok) {
      throw new Error(`NYT API error: ${response.status}`)
    }

    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (err) {
    console.error(err)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch NYT data' }),
    }
  }
}
