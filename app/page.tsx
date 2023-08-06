'use client'
import Form from './components/Form'
import Title from './components/Title'
import Content from './components/Content'
import { globalStore } from './state/store'

export default function Home () {
  const { text } = globalStore()
  return (
    <main className="flex h-screen flex-col items-center justify-between md:p-16 p-4 bg-[#343541]">
      {!text && <Title />}
      {text && <Content />}
      <Form />
    </main>
  )
}
