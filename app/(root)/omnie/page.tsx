"use client"

import Image from 'next/image'
import React from 'react'

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Reveal } from '@/components/shared/Reveal'

const omnie = () => {
  return (
    <div className='flex md:mx-auto mx-8 max-w-7xl mt-20 '>
      <div className='mt-10'>
        <Reveal type='left'>
        <p className='text-xl'>Jan Kowalski - trener, myśliciel, artysta, miłośnik matematyki oraz zagorzały fan Earla Nightingale'a</p>
        </Reveal>
        <div className='flex flex-col'>
          <Reveal type='left'>
          <div className='flex mt-10 p-5'>
            <Image 
              src='/assets/icons/calendar-white.png'
              alt='calendar'
              width={25}
              height={25}
            />
            <p className='ml-2 font-bold'>czerwiec 2021</p>
          </div>
          </Reveal>
          <Reveal type='left'>
          <div className='flex'>
            <p className='ml-10'>-</p>
            <p className='ml-2 mr-10'>Ukończyłem pierwszy kurs trenera personalnego i wziąłem udział w akademii Arnolda Schwarzeneggera</p>
          </div>
          </Reveal>

          <Reveal type='left'>
          <div>
            <div className='flex mt-5 p-5'>
              <Image 
                src='/assets/icons/calendar-white.png'
                alt='calendar'
                width={25}
                height={25}
              />
              <p className='ml-2 font-bold'>wrzesień 2021</p>
            </div>
            <div className='flex'>
              <p className='ml-10'>
              <Dialog>
                <DialogTrigger>
                  <Image 
                    src='/assets/images/mrolympia.jpg'
                    alt='mrolympia'
                    width={100}
                    height={100}
                    className='rounded-xl max-w-[10rem]'
                  />
                </DialogTrigger>
                <DialogContent className='p-0 border-0'>
                  <Image 
                    src='/assets/images/mrolympia.jpg'
                    alt='mrolympia'
                    width={1000}
                    height={1000}
                    className='rounded-xl'
                  />
                </DialogContent>
              </Dialog>

              </p>
              <p className='px-5 font-bold text-xl flex'>Pierwsze zawody kulturystyczne</p>
            </div>
            <p className='mx-10'>Po wielu miesiącach przygotowań wziąłem udział w konkursie na najlepszą sylwetkę w moim województwie. Zająłem 4 miejscie, co jest dla mnie wielkim sukcesem</p>
          </div>
          </Reveal>

          <Reveal type='left'>
          <div className='flex mt-5 p-5'>
            <Image 
              src='/assets/icons/calendar-white.png'
              alt='calendar'
              width={25}
              height={25}
            />
            <p className='ml-2 font-bold'>kwiecień 2022</p>
          </div>
          </Reveal>
          <Reveal type='left'>
          <div className='flex'>
            <p className='ml-10'>-</p>
            <p className='ml-2 mr-10'>Postanowiłem spróbować się w nowej dyscyplinie sportowej. Pokochałem bieganie i ukończyłem półmaraton w zaskakującym dla organizatorów czasie</p>
          </div>
          </Reveal>

          <Reveal type='left'>
          <div>
            <div className='flex mt-5 p-5'>
              <Image 
                src='/assets/icons/calendar-white.png'
                alt='calendar'
                width={25}
                height={25}
              />
              <p className='ml-2 font-bold'>czerwiec 2022</p>
            </div>
            <div className='flex'>
              <p className='ml-10'>
              <Dialog>
                <DialogTrigger>
                  <Image 
                    src='/assets/images/football.jpg'
                    alt='football'
                    width={100}
                    height={100}
                    className='rounded-xl max-w-[10rem]'
                  />
                </DialogTrigger>
                <DialogContent className='p-0 border-0'>
                  <Image 
                    src='/assets/images/football.jpg'
                    alt='football'
                    width={1000}
                    height={1000}
                    className='rounded-xl'
                  />
                </DialogContent>
              </Dialog>

              </p>
              <p className='px-5 font-bold text-xl flex'>Przygoda z piłką nożną</p>
            </div>
            <p className='mx-10 mb-20'>Zdecydowałem się wrócić do mojego hobby z dzieciństwa i zacząłem amatorską karierę piłkarza w lokalnym klubie sportowym</p>
          </div>
          </Reveal>

        </div>
      </div>
    </div>
  )
}

export default omnie