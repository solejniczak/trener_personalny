import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobilePricing from '@/components/shared/MobilePricing'
import Pricing from '@/components/shared/Pricing'

  

const Cennik = () => {
  return (
    <div>
        <div className='mt-20 text-center max-w-2xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full'>
            <MobilePricing />
            <Pricing />
        </div>
    </div>
  )
}

export default Cennik