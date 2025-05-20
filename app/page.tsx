'use client'
import { useRevealer } from '@/hooks/UseReveal'
import Image from 'next/image'

export default function Home() {
  useRevealer()
  return (
    <>
      <div className='revealer'></div>
      <div className='home w-full h-screen overflow-hidden '>
        <div className=' header absolute top-1/4 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full'>
          <h1 className='text-[22vw] mt-5 tracking-widest text-center'>MAX</h1>
        </div>
        <div
          className=' hero-img absolute left-1/2 bottom-0 translate-x-[-50%]  w-[95%] h-[50vh] overflow-hidden
       '
        >
          <Image src='/home.jpg' alt='img' fill className='object-cover' />
        </div>
      </div>
    </>
  )
}
