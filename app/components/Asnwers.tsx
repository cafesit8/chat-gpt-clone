'use client'
import icon from '@/public/chat-gpt.png'
import user from '@/public/user.png'
import { globalStore } from '@/app/state/store'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Asnwers () {
  const { response, loading, text: prompt } = globalStore()
  const contentRef = useRef<HTMLDivElement>(null)
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
      {loading
        ? <div className='w-full h-full flex justify-center items-center'>
          <span className="loader"></span>
        </div>
        : response.map((text, i) => (
          <article key={i} className='flex flex-col gap-1'>
            <div className='bg-[#545468] flex items-center p-3'>
              <Image priority src={user} alt='gpt' width={20} height={20} className='mr-2 self-baseline bg-white' />
              <h3>{prompt || text.prompt}</h3>
            </div>
            <div className='flex p-3'>
              <Image priority src={icon} alt='gpt' width={20} height={20} className='mr-2 self-baseline' />
              <div>
                <p>{text.message}</p>
              </div>
            </div>
          </article>
        ))}
    </section>
  )
}
