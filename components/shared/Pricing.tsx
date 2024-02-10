import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Reveal } from './Reveal'

const Pricing = () => {
  return (
    <div>
        <div className='hidden md:flex flex-row justify-center w-full '>
            <div className='flex flex-col border-r w-1/4'>
                <p className='p-5 border-b'></p>
                <p className='p-5 min-h-[5rem] max-h-[5rem]'>Plan trenignowy</p>
                <p className='p-5 min-h-[5rem] max-h-[5rem]'>Tygodniowa dieta</p>
                <p className='p-5 min-h-[5rem] max-h-[5rem]'>Wsparcie całodobwe</p>
                <p className='p-5 min-h-[5rem] max-h-[5rem]'>1vs1 w lige</p>
                <p className='p-5 min-h-[5rem] max-h-[5rem]'>Pewniaczki na żądanie</p>
            </div>

            <div className='flex flex-col border-r w-1/4 min-h-[5rem]'>
                <p className='p-2 border-b'>Basic</p>
                <p className='p-5 flex justify-center min-h-[5rem]'>
                    <p>
                        <Image 
                            src='/assets/icons/checked.png'
                            alt='checked'
                            width={25}
                            height={25}
                        />
                    </p>
                </p>
                <p className='p-5 flex justify-center min-h-[5rem]'>
                    <p>
                        <Image 
                            src='/assets/icons/checked.png'
                            alt='checked'
                            width={25}
                            height={25}
                        />
                    </p>
                </p>
                <p className='p-5 flex justify-center min-h-[5rem]'>
                    <p>
                        <Image 
                            src='/assets/icons/unchecked.png'
                            alt='checked'
                            width={25}
                            height={25}
                        />
                    </p>
                </p>
                <p className='p-5 flex justify-center min-h-[5rem]'>
                    <p>
                        <Image 
                            src='/assets/icons/unchecked.png'
                            alt='checked'
                            width={25}
                            height={25}
                        />
                    </p>
                </p>
                <p className='p-5 flex justify-center min-h-[5rem]'>
                    <p>
                        <Image 
                            src='/assets/icons/unchecked.png'
                            alt='checked'
                            width={25}
                            height={25}
                        />
                    </p>
                </p>
                <p className='p-5 flex justify-center min-h-[5rem]'>
                    99zł* 
                </p>
                <p className='p-5 flex justify-center min-h-[5rem]'>
                <Button size="lg" className="button md:w-fit bg-pink hover:bg-pink-700">
                    <Link href="/cennik">
                        Kup Basic
                    </Link>
                </Button>
                </p>
            </div>
            <div className='flex flex-col border-r w-1/4 min-h-[5rem]'>
                <p className='p-2 border-b'>Premium</p>
                <p className='p-5 flex justify-center min-h-[5rem]'>
                    <p>
                        <Image 
                            src='/assets/icons/checked.png'
                            alt='checked'
                            width={25}
                            height={25}
                        />
                    </p>
                </p>
                <p className='p-5 flex justify-center min-h-[5rem]'>
                    <p>
                        <Image 
                            src='/assets/icons/checked.png'
                            alt='checked'
                            width={25}
                            height={25}
                        />
                    </p>
                    
                </p>
                <p className='p-5 flex justify-center min-h-[5rem]'>
                    <p>
                        <Image 
                            src='/assets/icons/checked.png'
                            alt='checked'
                            width={25}
                            height={25}
                        />
                    </p>
                </p>
                <p className='p-5 flex justify-center min-h-[5rem]'>
                    <p>
                        <Image 
                            src='/assets/icons/checked.png'
                            alt='checked'
                            width={25}
                            height={25}
                        />
                    </p>
                </p>
                <p className='p-5 flex justify-center min-h-[5rem]'>
                    <p>
                        <Image 
                            src='/assets/icons/unchecked.png'
                            alt='checked'
                            width={25}
                            height={25}
                        />
                    </p>
                </p>
                <p className='p-5 flex justify-center min-h-[5rem]'>
                    139zł* 
                </p>
                <p className='p-5 flex justify-center min-h-[5rem] '>
                <Button size="lg" className="button w-fit bg-pink hover:bg-pink-700">
                    <Link href="/cennik">
                        Kup Premium
                    </Link>
                </Button>
                </p>
            </div>
            <div className='flex flex-col w-1/4 '>
                <p className='p-2 border-b'>jakubsc Special</p>
                <p className='p-5 flex justify-center min-h-[5rem]'>
                    <p>
                        <Image 
                            src='/assets/icons/checked.png'
                            alt='checked'
                            width={25}
                            height={25}
                        />
                    </p>
                </p>
                <p className='p-5 flex justify-center min-h-[5rem]'>
                    <p>
                        <Image 
                            src='/assets/icons/checked.png'
                            alt='checked'
                            width={25}
                            height={25}
                        />
                    </p>
                </p>
                <p className='p-5 flex justify-center min-h-[5rem]'>
                    <p>
                        <Image 
                            src='/assets/icons/checked.png'
                            alt='checked'
                            width={25}
                            height={25}
                        />
                    </p>
                </p>
                <p className='p-5 flex justify-center min-h-[5rem]'>
                    <p>
                        <Image 
                            src='/assets/icons/checked.png'
                            alt='checked'
                            width={25}
                            height={25}
                        />
                    </p>
                </p>
                <p className='p-5 flex justify-center min-h-[5rem]'>
                    <p>
                        <Image 
                            src='/assets/icons/checked.png'
                            alt='checked'
                            width={25}
                            height={25}
                        />
                    </p>
                </p>
                <p className='p-5 flex justify-center min-h-[5rem]'>
                    179zł* 
                </p>
                <p className='p-5 flex justify-center min-h-[5rem]'>
                    <Button size="lg" className="button w-fit bg-pink hover:bg-pink-700">
                        <Link href="/cennik">
                            Kup Special
                        </Link>
                    </Button>
                </p>
            </div>
        </div>
        <p className='mt-10 mb-20 md:flex hidden justify-center'>* Podana cena to cena miesięcznego abonamentu</p>
    </div>
  )
}

export default Pricing