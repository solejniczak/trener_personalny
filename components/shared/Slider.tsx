"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"

export default function Slider() {
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    )

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full"
        >
        <CarouselContent>
            
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="flex flex-col rounded-2xl bg-white text-black text-star w-full">
                        <div className="flex flex-row border-b p-2 h-1/3 ">
                            <Image
                            src='/assets/icons/user.svg'
                            alt="user"
                            width={50}
                            height={50}
                            />

                            <p className="flex ml-2 text-center items-center justify-center font-bold text-lg">Janusz Lewandowski</p>
                        </div>
                        <p className="p-5 h-2/3">Świetny trener, który wie jak zmotywować</p>
                    </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="flex flex-col rounded-2xl bg-white text-black text-start">
                        <div className="flex flex-row border-b p-2 h-1/3">
                            <Image
                            src='/assets/icons/user.svg'
                            alt="user"
                            width={50}
                            height={50}
                            />

                    <p className="flex ml-2 text-center items-center justify-center font-bold text-lg">Kamil Ślimak</p>       
                        </div>
                        <p className="p-5 h-2/3">Podszedłem w trakcie treningu zapytać o porady i Pan Jan był tak miły, że przerwał trening i mi pomógł</p>
                    </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="flex flex-col rounded-2xl bg-white text-black text-start">
                        <div className="flex flex-row border-b p-2 h-1/3">
                            <Image
                            src='/assets/icons/user.svg'
                            alt="user"
                            width={50}
                            height={50}
                            />

                        <p className="flex ml-2 text-center items-center justify-center font-bold text-xl">Ewa Kowalska</p>
                        </div>
                        <p className="p-5 h-2/3">Miałam problem z jelitami, ale na szczęście Pan Jan pomógł mi dobrać odpowiednią dietę</p>
                    </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="flex flex-col rounded-2xl bg-white text-black text-start">
                        <div className="flex flex-row border-b p-2 h-1/3 w-auto">
                            <Image
                            src='/assets/icons/user.svg'
                            alt="user"
                            width={50}
                            height={50}
                            />

                        <p className="flex ml-2 text-center items-center justify-center font-bold text-xl">Tomasz Rakowski</p>
                        </div>
                        <p className="p-5 h-2/3">Nejlepszy trener na jakiego trafiłem w swoim życiu</p>
                    </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <div className="flex flex-col rounded-2xl bg-white text-black text-start">
                        <div className="flex flex-row border-b p-2 h-1/3 w-auto">
                            <Image
                            src='/assets/icons/user.svg'
                            alt="user"
                            width={50}
                            height={50}
                            />

                        <p className="flex ml-2 text-center items-center justify-center font-bold text-xl">Honorata Bukowska</p>
                        </div>
                        <p className="p-5 h-2/3">Polecam, zbilansowane diety, a zniżki w Lidlu pomagają sporo zaoszczędzić</p>
                    </div>
                </CarouselItem>

            </CarouselContent>
        </Carousel>
    )
}
