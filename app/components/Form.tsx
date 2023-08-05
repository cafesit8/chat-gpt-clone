'use client'
import { FormEvent, useState } from 'react'
import { globalStore } from '../state/store'
import axios from 'axios'

export default function Form () {
  const [prompt, setPrompt] = useState('')
  const { getPromp, getResponse } = globalStore()

  function handleSubmit (e: FormEvent<HTMLElement>) {
    e.preventDefault()
    getPromp(prompt)
    getAnswer()
  }

  async function getAnswer () {
    const req = await axios.post('/api/hello', JSON.stringify({ prompt }))
    const res = await req.data
    getResponse(res)
  }

  return (
    <section className="w-full flex justify-center items-center h-[20%] flex-col">
      <form onSubmit={handleSubmit} className='relative mb-3 w-full lg:w-[1000px]'>
        <input onChange={(e) => setPrompt(e.target.value)} className='p-3 bg-[#40414f] outline-none text-white shadow-md w-full lg:w-[1000px] rounded-lg' type="text" placeholder='Envie el mensaje' />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6 absolute bottom-0 top-3 right-3 text-[#6b6c7b]">
            <path
              d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
          </svg>
        </button>
      </form>
      <span className='md:text-xs text-center text-[9px] text-white/70'>Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT August 3 Version</span>
    </section>
  )
}
