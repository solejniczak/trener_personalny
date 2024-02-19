"use client"

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

import { Reveal } from './Reveal'
import Checkout from './Checkout'

const MobilePricing = () => {
  return (
    <div className='md:hidden flex flex-col '>
                <Reveal>
                <p className='text-2xl'>Wybierz swój plan</p>
                </Reveal>
                <div className='flex flex-col mx-auto justify-center gap-10 p-5 w-3/4'>
                    <Reveal>
                    <Popover>
                        <PopoverTrigger className='bg-white shadow-pink  p-5 rounded-xl w-full text-black font-bold text-xl'>Basic</PopoverTrigger>
                        <PopoverContent className='rounded-xl shadow-pink'>
                            <div>
    
                                <div className='flex flex-row p-2'>
                                    <p className='mr-2'>
                                        <Image 
                                            src='/assets/icons/checked.png'
                                            alt='checked'
                                            width={25}
                                            height={25}
                                        />
                                    </p>
                                    <p>Plan trenignowy</p>
                                </div>
                                <div className='flex flex-row p-2'>
                                    <p className='mr-2'>
                                        <Image 
                                            src='/assets/icons/checked.png'
                                            alt='checked'
                                            width={25}
                                            height={25}
                                        />
                                    </p>
                                    <p>Tygodniowa dieta</p>
                                </div>
                                <p className='mt-5 font-bold'>Cena: 99zł miesięcznie</p>
                                <Checkout title={'Plan Basic'} price={'99'} buttonText={'Kup Basic'}/>

                            </div>
                        </PopoverContent>
                    </Popover>
                    </Reveal>

                    <Reveal delay={0.3}>
                    <Popover>
                        <PopoverTrigger className='bg-white shadow-pink  p-5 rounded-xl w-full text-black font-bold text-xl'>Premium</PopoverTrigger>
                        <PopoverContent className='rounded-xl shadow-pink'>
                            <div>
    
                                <div className='flex flex-row p-2'>
                                    <p className='mr-2'>
                                        <Image 
                                            src='/assets/icons/checked.png'
                                            alt='checked'
                                            width={25}
                                            height={25}
                                        />
                                    </p>
                                    <p>Plan trenignowy</p>
                                </div>
                                <div className='flex flex-row p-2'>
                                    <p className='mr-2'>
                                        <Image 
                                            src='/assets/icons/checked.png'
                                            alt='checked'
                                            width={25}
                                            height={25}
                                        />
                                    </p>
                                    <p>Tygodniowa dieta</p>
                                </div>
                                <div className='flex flex-row p-2'>
                                    <p className='mr-2'>
                                        <Image 
                                            src='/assets/icons/checked.png'
                                            alt='checked'
                                            width={25}
                                            height={25}
                                        />
                                    </p>
                                    <p>Wsparcie całodobowe</p>
                                </div>
                                <div className='flex flex-row p-2'>
                                    <p className='mr-2'>
                                        <Image 
                                            src='/assets/icons/checked.png'
                                            alt='checked'
                                            width={25}
                                            height={25}
                                        />
                                    </p>
                                    <p>Indywidualny trening</p>
                                </div>
                                <p className='mt-5 font-bold'>Cena: 139zł miesięcznie</p>
                                <Checkout title={'Plan Premium'} price={'139'} buttonText={'Kup Premium'}/>

                            </div>
                        </PopoverContent>
                    </Popover>
                    </Reveal>

                    <Reveal delay={0.4}>
                    <Popover>
                        <PopoverTrigger className='bg-white shadow-pink  p-5 rounded-xl w-full text-black font-bold text-xl'>Special</PopoverTrigger>
                        <PopoverContent className='rounded-xl shadow-pink'>
                            <div>
    
                                <div className='flex flex-row p-2'>
                                    <p className='mr-2'>
                                        <Image 
                                            src='/assets/icons/checked.png'
                                            alt='checked'
                                            width={25}
                                            height={25}
                                        />
                                    </p>
                                    <p>Plan trenignowy</p>
                                </div>
                                <div className='flex flex-row p-2'>
                                    <p className='mr-2'>
                                        <Image 
                                            src='/assets/icons/checked.png'
                                            alt='checked'
                                            width={25}
                                            height={25}
                                        />
                                    </p>
                                    <p>Tygodniowa dieta</p>
                                </div>
                                <div className='flex flex-row p-2'>
                                    <p className='mr-2'>
                                        <Image 
                                            src='/assets/icons/checked.png'
                                            alt='checked'
                                            width={25}
                                            height={25}
                                        />
                                    </p>
                                    <p>Wsparcie całodobowe</p>
                                </div>
                                <div className='flex flex-row p-2'>
                                    <p className='mr-2'>
                                        <Image 
                                            src='/assets/icons/checked.png'
                                            alt='checked'
                                            width={25}
                                            height={25}
                                        />
                                    </p>
                                    <p>Indywidualny trening</p>
                                </div>
                                <div className='flex flex-row p-2'>
                                    <p className='mr-2'>
                                        <Image 
                                            src='/assets/icons/checked.png'
                                            alt='checked'
                                            width={25}
                                            height={25}
                                        />
                                    </p>
                                    <p>Zniżki w Lidlu</p>
                                </div>
                                <p className='mt-5 font-bold'>Cena: 179zł miesięcznie</p>
                                <Checkout title={'Plan jakubsc Special'} price={'179'} buttonText={'Kup Special'}/>

                            </div>
                        </PopoverContent>
                    </Popover>
                    </Reveal>
                </div>

            </div>
  )
}

export default MobilePricing