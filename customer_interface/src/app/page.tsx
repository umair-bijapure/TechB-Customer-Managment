import Image from 'next/image'
import React from 'react'
import { CommonHelmet } from './components/common/bannersAndheadings'
import { CommonButtonSolidBlue } from './components/common/buttons'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex  min-h-screen flex-col items-center justify-center gap-y-10 p-10">
        <CommonHelmet pageTitle="Home" applicationTitle="TechB - Natural Gas Limited" favicon={''} />


      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/techb_logo_transparent.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className='flex flex-col gap-y-4  items-center justify-center p-10'>
       <h1> Welcome to TechB - Natural Gas Limited</h1>
       <h3>This Customer Managment Section!</h3>
       <Link href={'/customers/'}> <CommonButtonSolidBlue text='Customer List'/></Link>
      
      </div>


    </main>
  )
}
