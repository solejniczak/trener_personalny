
import React from 'react'
import Link from 'next/link'

const Sukces = () => {
  return (
    <div>
        <div className='mt-20 text-center max-w-2xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full flex flex-col justify-center'>
            <p className='font-bold'>Dziękuję za zakup. W celu otrzymania szczegółów prosimy o kontakt z trenerem.</p>
            <Link className='text-pink font-bold text-xl mt-5'
            href='https://www.instagram.com/'
            >
                Napisz do mnie na instagramie
                </Link>
        </div>
    </div>
  )
}

export default Sukces