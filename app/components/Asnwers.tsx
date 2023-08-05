'use client'
import { globalStore } from '@/app/state/store'
import { useEffect, useRef } from 'react'

export default function Asnwers () {
  const { response } = globalStore()
  const contentRef = useRef(null)
  useEffect(() => {
    if (contentRef.current) {
      const { scrollHeight, clientHeight } = contentRef.current
      const scrollTo = scrollHeight - clientHeight
      contentRef.current.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
      })
    }
  })
  return (
    <section ref={contentRef} className='content w-full h-full flex flex-col gap-5 flex-grow overflow-y-scroll'>
      {response.map(text => (
        <article key={text.prompt}>
          <div className='bg-gray-600'>
            <h3>{text.prompt}</h3>
          </div>
          <p>{text.message}</p>
        </article>
      ))}
    </section>
  )
}
