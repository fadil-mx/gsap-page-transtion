'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { useTransitionRouter } from 'next-view-transitions'

const Nav = () => {
  const router = useTransitionRouter()
  const pathname = usePathname()

  function triggerTransition() {
    document.documentElement.animate(
      [
        {
          clipPath: 'polygon(25% 75%,  75% 75%, 75% 75%, 25% 75%)',
        },
        {
          clipPath: 'polygon(0 100%, 100%  100%, 100% 0%, 0% 0%)',
        },
      ],
      {
        duration: 2000,
        easing: 'cubic-bezier(0.9, 0, 0.1, 1)',
        pseudoElement: '::view-transition-new(root)',
      }
    )
  }

  const handleClick = (path) => (e) => {
    if (pathname === path) {
      e.preventDefault()
      return
    }
    router.push(path, { onTransitionReady: triggerTransition })
  }
  return (
    <div className='nav fixed top-0 left-0 w-screen px-4  grid grid-cols-3 z-10 '>
      <div className='col col-span-1 '>
        <div className='nav-logo'>
          <Link href='/' onClick={handleClick('/')}>
            MAX
          </Link>
        </div>
      </div>
      <div className='col col-span-2 flex justify-between  '>
        <div className='nav-items space-y-[-4px] cursor-pointer'>
          <div className='nav-item  '>
            <Link href='/work' onClick={handleClick('/work')}>
              Work
            </Link>
          </div>
          <div className='nav-item'>
            <Link href='/studio' onClick={handleClick('/studio')}>
              Studio
            </Link>
          </div>
          <div className='nav-item'>
            <Link href='/contact' onClick={handleClick('/contact')}>
              Contact
            </Link>
          </div>
        </div>
        <div className='nav-copy'>
          <p className=''>India</p>
        </div>
      </div>
    </div>
  )
}

export default Nav
