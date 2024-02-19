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
      <div>
        <Reveal type='left'>
        <p>Jakub Olejniczak - trener, myśliciel, artysta, miłośnik matematyki oraz zagorzały fan Earla Nightingale'a</p>
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
                    src='/assets/images/blackman.png'
                    alt='blackman'
                    width={100}
                    height={100}
                    className='rounded-xl max-w-[10rem]'
                  />
                </DialogTrigger>
                <DialogContent className='p-0 border-0'>
                  <Image 
                    src='/assets/images/blackman.png'
                    alt='blackman'
                    width={1000}
                    height={1000}
                    className='rounded-xl'
                  />
                </DialogContent>
              </Dialog>

              </p>
              <p className='px-5 font-bold text-xl flex'>Walka z rasizmem</p>
            </div>
            <p className='mx-10'>Zasmucony szerzącym się rasizmem wśród młodych ludzi, postanowiłem wziąć udział w kampanii na rzecz walki z rasizmem. 
            Skutecznie opracowaliśmy plan przeciwdziałania dyskryminacji na tle rasowym.</p>
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
            <p className='ml-2 mr-10'>Postanowiłem wystartować w wyborach na gospodarza klasy. Zdeklasowałem konkurencję i zaprowadziłem porządek na szkolnym podwórku.</p>
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
                    src='/assets/images/football.png'
                    alt='football'
                    width={100}
                    height={100}
                    className='rounded-xl max-w-[10rem]'
                  />
                </DialogTrigger>
                <DialogContent className='p-0 border-0'>
                  <Image 
                    src='/assets/images/football.png'
                    alt='football'
                    width={1000}
                    height={1000}
                    className='rounded-xl'
                  />
                </DialogContent>
              </Dialog>

              </p>
              <p className='px-5 font-bold text-xl flex'>Koniec kariery piłkarskiej</p>
            </div>
            <p className='mx-10'>Zdecydowałem się zakonczyć swoją karierę piłkarską i skupić się na rozwoju w obaszrach kulturystyki oraz bukmacherki.</p>
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
              <p className='ml-2 font-bold'>styczeń 2023</p>
            </div>
            <div className='flex'>
              <p className='ml-10'>
              <Dialog>
                <DialogTrigger>
                  <Image 
                    src='/assets/images/bodyb.png'
                    alt='bodybuilder'
                    width={100}
                    height={100}
                    className='rounded-xl max-w-[10rem]'
                  />
                </DialogTrigger>
                <DialogContent className='p-0 border-0'>
                  <Image 
                    src='/assets/images/bodyb.png'
                    alt='bodybuilder'
                    width={1000}
                    height={1000}
                    className='rounded-xl'
                  />
                </DialogContent>
              </Dialog>

              </p>
              <p className='px-5 font-bold text-xl flex'>Zawody kulturystyczne</p>
            </div>
            <p className='mx-10'>Pewien mędrzec powiedział kiedyś "Nigdy nie rezygnuj z celu tylko dlatego, że osiągnięcie go wymaga czasu. Czas i tak upłynie.".
              Słowa te zainspirowały mnie do działania i dzięki temu wygrałem kulturystyczne zawody w mojej szkole.
            </p>
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
              <p className='ml-2 font-bold'>lipiec 2023</p>
            </div>
            <div className='flex'>
              <p className='ml-10'>
              <Dialog>
                <DialogTrigger>
                  <Image 
                    src='/assets/images/oki.jpg'
                    alt='oki'
                    width={100}
                    height={100}
                    className='rounded-xl max-w-[10rem]'
                  />
                </DialogTrigger>
                <DialogContent className='p-0 border-0'>
                  <Image 
                    src='/assets/images/oki.jpg'
                    alt='oki'
                    width={1000}
                    height={1000}
                    className='rounded-xl'
                  />
                </DialogContent>
              </Dialog>

              </p>
              <p className='px-5 font-bold text-xl flex'>Trasa koncertowa z OKIM</p>
            </div>
            <p className='mx-10 mb-20'>"Jeśli byłbym kimś innym nie byłbym sobą" - te słowa zainsirowały mnie do rozwoju w kolejnym obszarze. 
            Postanowiłem sprobować sowich sił w branży muzycznej i po kilku wzlotach i upadkach w lipcu 2023 wyruszyłem w największą trasę koncertową w historii Polski.
            </p>
          </div>
          </Reveal>

        </div>
      </div>
    </div>
  )
}

export default omnie