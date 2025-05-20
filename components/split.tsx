'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React from 'react'
gsap.registerPlugin(SplitText)

type Props = {
  children: React.ReactNode
  type?: 'words' | 'chars' | 'lines' | string
}

const Split = ({ children, type = 'words' }: Props) => {
  useGSAP(() => {
    let split = SplitText.create('.split', {
      type: type,
    })
    const targets = type.includes('chars')
      ? split.chars
      : type.includes('words')
      ? split.words
      : type.includes('lines')
      ? split.lines
      : split.words
    gsap.from(targets, {
      duration: 1,
      y: 20,
      opacity: 0,
      stagger: 0.3,
      ease: 'power2.out',
      delay: 2,
    })
  }, [])
  return <div>{children}</div>
}
export default Split
