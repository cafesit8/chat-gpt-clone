'use client'
import Form from './components/Form'
import Title from './components/Title'
import Content from './components/Content'
import { globalStore } from './state/store'

export default function Home () {
  // const [prompt, setPrompt] = useState('')
  const { text } = globalStore()

  // async function handleSubmit (e: FormEvent<HTMLElement>) {
  //   e.preventDefault()
  //   const data = await axios.post('/api/hello', { prompt })
  //   const resp = await data.data
  //   console.log(resp)
  // }
  return (
    <main className="flex h-screen flex-col items-center justify-between md:p-16 p-4 bg-[#343541]">
      {!text && <Title />}
      {text && <Content />}
      <Form />
      {/* <form onSubmit={handleSubmit} action="">
        <input onChange={(e) => setPrompt(e.target.value)} className="text-black" type="text" name="" id="" />
        <button>Enviar</button>
      </form> */}
    </main>
  )
}
