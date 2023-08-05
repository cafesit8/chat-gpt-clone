import { NextResponse } from 'next/server'
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export async function POST (req: Request) {
  try {
    const { prompt } = await req.json()
    const response = await openai.createCompletion({
      prompt,
      model: 'text-davinci-003',
      temperature: 0.7,
      max_tokens: 200
    })
    return NextResponse.json({ message: response.data.choices[0].text, prompt })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
