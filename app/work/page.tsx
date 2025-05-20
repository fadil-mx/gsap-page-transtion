'use client'
import { useRevealer } from '@/hooks/UseReveal'
import Image from 'next/image'
import React from 'react'

const page = () => {
  useRevealer()
  return (
    <>
      <div className='revealer'></div>
      <div className='work text-center flex flex-col gap-2 px-[15em] py-[10em]'>
        <h1 className='text-5xl font-bold  '>Selected work</h1>
        <div className='projects w-[32%] m-auto flex flex-col gap-[4em]'>
          <div className='aspect-[4/5] w-72 relative'>
            <Image
              src='/1.jpg'
              alt='img'
              fill
              className='object-cover rounded'
            />
          </div>
          <div className='aspect-[4/5] w-72 relative'>
            <Image
              src='/5.jpg'
              alt='img'
              fill
              className='object-cover rounded'
            />
          </div>
          <div className='aspect-[4/5] w-72 relative'>
            <Image
              src='/3.jpg'
              alt='img'
              fill
              className='object-cover rounded'
            />
          </div>
          <div className='aspect-[4/5] w-72 relative'>
            <Image
              src='/4.jpg'
              alt='img'
              fill
              className='object-cover rounded'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default page
