"use client"

import Slider from "@/components/shared/Slider";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";

export default function Home() {
  return (
    <div>
        <div className="md:min-h-[100vh] bg-muscular flex items-center justify-center mt-20 md:mt-0">
          <div className="max-w-6xl w-full p-10 flex flex-col items-center justify-center text-center">
            <Reveal>
              <p className="md:text-2xl text-lg p-2">Trener personalny</p>
            </Reveal>
            <Reveal>
              <Image
                src='/assets/images/jakub.png'
                alt="jakub"
                width={300}
                height={400}
                className="p-5"
              />
            </Reveal>
            <Reveal>
              <Image
                src='/assets/images/olejniczak1.png'
                alt="olejniczak"
                width={800}
                height={1000}
                className="p-5"
              />
            </Reveal>
            <Reveal>
              <p className="mt-5 p-2 md:text-lg">Nigdy nie rezygnuj z celu tylko dlatego, że osiągnięcie go wymaga czasu. Czas i tak upłynie.</p>
            </Reveal>
            <Reveal>
              <p className="md:text-xl text-pink-700 font-bold">Earl Nightingale</p>
            </Reveal>

            <Reveal>
              <Button size="lg" className="mt-10 button w-fit bg-pink-700 hover:bg-pink-900 rounded-xl">
                <Link href="#oferta">
                  Zobacz ofertę
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>

        <div id="oferta" className="md:min-h-[100vh] flex items-center justify-center">
          <div className="max-w-6xl w-full p-10 flex flex-col items-center justify-center text-center">
            <Reveal>
              <p className="md:text-2xl text-lg p-2 mt-5">Co otrzymujesz dokonując zakupu?</p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:mx-48 mt-10 w-1/2 justify-center">
 
              <Reveal>
                <div>
                  <p className="p-bold-24 mb-5">Pełną opiekę</p>
                  <div className="flex flex-col justify-center items-center rounded-2xl bg-white hover:scale-105 duration-500 shadow-pink p-5">
                    <Image
                      src='/assets/icons/24.svg'
                      alt="24"
                      width={1000}
                      height={1000}
                      className="p-5"
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div>
                  <p className="p-bold-24 mb-5">Optymalną dietę</p>
                  <div className="flex flex-col justify-center items-center rounded-2xl bg-white hover:scale-105 duration-500 shadow-pink p-5">
                    <Image
                      src='/assets/icons/food.svg'
                      alt="diet"
                      width={1000}
                      height={1000}
                      className="p-5"
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div>
                  <p className="p-bold-24 mb-5  text-nowrap">Pewniaczki co tydzień</p>
                  <div className="flex flex-col justify-center items-center rounded-2xl bg-white hover:scale-105 duration-500 shadow-pink p-5">
                    <Image
                      src='/assets/icons/money.svg'
                      alt="money"
                      width={1000}
                      height={1000}
                      className="p-5"
                    />
                  </div>
                </div>
              </Reveal>

            </div>

            <Reveal>
              <Button size="lg" className="mt-10 button w-fit bg-pink hover:bg-pink-darker shadow-white hover:shadow-gray">
                <Link href="/cennik">
                  Zobacz ofertę
                </Link>
              </Button>
            </Reveal>

            <Reveal>
              <p className="md:text-2xl text-lg p-2 mt-20">Ci, którzy mi zaufali</p>
            </Reveal>

            
              <div className="mt-5 w-full mb-20">
              <Reveal>
                <Slider />
              </Reveal>
              </div>
            
          </div>
        </div>
    </div>
  );
}
