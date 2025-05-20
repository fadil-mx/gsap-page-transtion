'use client'
import { useRevealer } from '@/hooks/UseReveal'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'
gsap.registerPlugin(SplitText)

const page = () => {
  useRevealer()
  useGSAP(() => {
    let split = SplitText.create('.contact h2', {
      type: 'lines, words',
    })
    gsap.from(split.words, {
      duration: 1,
      y: 20,
      opacity: 0,
      stagger: 0.3,
      ease: 'power2.out',
      delay: 2,
    })
  }, [])
  return (
    <>
      <div className='revealer'></div>

      <div className='contact gap-4  py-[10em] px-4 grid grid-cols-3'>
        <div className='col col-span-1'>
          <h2 className='split'>Contact Us</h2>
        </div>
        <div className='col col-span-2 flex flex-col gap-7'>
          <div className='contact-copy'>
            <h2 className=''>Collaborations</h2>
            <h2 className=''>maxstudio@gmail.com</h2>
          </div>
          <div className='contact-copy'>
            <h2 className=''>Inquiries</h2>
            <h2 className=''>fadilshereefmx@gmail.com</h2>
          </div>
          <div className='social absolute flex bottom-0  gap-6 mb-6 '>
            <p className=''>Instagram</p>
            <p className=''>Twitter</p>
            <p className=''>Linikedin</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
