"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Reveal } from './Reveal'
import Checkout from './Checkout'

const Pricing = () => {
  return (
    <div>
        <div className='hidden md:flex flex-row justify-center w-full '>
            <div className='flex flex-col border-r w-1/4'>
                <p className='p-5 border-b'></p>
                <p className='p-5 min-h-[5rem] max-h-[5rem]'>Plan trenignowy</p>
                <p className='p-5 min-h-[5rem] max-h-[5rem]'>Tygodniowa dieta</p>
                <p className='p-5 min-h-[5rem] max-h-[5rem]'>Wsparcie całodobwe</p>
                <p className='p-5 min-h-[5rem] max-h-[5rem]'>Indywidualny trening</p>
                <p className='p-5 min-h-[5rem] max-h-[5rem]'>Zniżki w Lidlu</p>
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
                    <Checkout title={'Plan Basic'} price={99} buttonText={'Kup Basic'}/>
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
                <Checkout title={'Plan Premium'} price={139} buttonText={'Kup Premium'}/>
                </p>
            </div>
            <div className='flex flex-col w-1/4 '>
                <p className='p-2 border-b'>Special</p>
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
                    <Checkout title={'Plan jakubsc Special'} price={179} buttonText={'Kup Special'}/>
                </p>
            </div>
        </div>
        <p className='mt-10 mb-20 md:flex hidden justify-center'>* Podana cena to cena miesięcznego abonamentu</p>
    </div>
  )
}

export default Pricing