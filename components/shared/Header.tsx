import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex w-full mx-auto justify-center navbar-blur'>
        <div className='flex flex-row justify-between gap-5 md:gap-20 text-lg text-white tracking-wider'>

            <Link href='/'>
                <p className='p-5 hover:text-pink-700 duration-500'>Strona główna</p>
            </Link>
            <Link href='/omnie'>
                <p className='p-5 hover:text-pink-700 duration-1000'>O mnie</p>
            </Link>
            <Link href='/cennik'>
                <p className='p-5 hover:text-pink-700 duration-1000'>Cennik</p>
            </Link>
        </div>
    </div>
  )
}

export default Header