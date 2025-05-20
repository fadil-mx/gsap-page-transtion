'use client'
import { useRevealer } from '@/hooks/UseReveal'
import Image from 'next/image'
import React from 'react'

const page = () => {
  useRevealer()
  return (
    <>
      <div className='revealer'></div>

      <div className='studio  gap-4  py-[10em] px-4  grid grid-cols-3'>
        <div className='col col-span-1'>
          <h2 className=''>Our story</h2>
        </div>
        <div className='col col-span-2 flex flex-col gap-4'>
          <h2 className=''>
            Our studio is a creative space where ideas come to life. We are a
            team of passionate individuals who believe in the power of design
            and storytelling. Our mission is to create meaningful experiences
            that resonate with people and leave a lasting impact.
          </h2>
          <div className='aspect-[5/7] w-220 relative'>
            <Image src='/6.jpg' alt='example' fill className='object-cover' />
          </div>
        </div>
      </div>
    </>
  )
}

export default page
