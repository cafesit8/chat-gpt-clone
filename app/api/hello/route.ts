import { NextResponse } from 'next/server'
// import { Configuration, OpenAIApi } from 'openai'

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY
// })

// if (!configuration.apiKey) throw new Error('OPENAI_API_KEY is not set')

// const openai = new OpenAIApi(configuration)

export async function POST (req: Request) {
  try {
    const { prompt } = await req.json()
    // const response = await openai.createCompletion({
    //   prompt: 'dame chistes',
    //   model: 'text-davinci-003',
    //   temperature: 0.7,
    //   max_tokens: 60
    // })
    // console.log(response)
    return NextResponse.json({ message: `${prompt}, este es el momento en que se debe establecer cualquier cosa y ahora miso estoy escribiendo cualquier totnería que se me salga de la caeza al mismo tiempo practicnad mi escritura rápida con el teclado`, prompt })
  } catch (error) {
    return NextResponse.json({ error })
  }
}
