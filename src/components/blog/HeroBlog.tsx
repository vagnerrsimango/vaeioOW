import React from "react";
import Image from "next/image";
import Showcase3 from "@/lib/img/showcase3.svg";
import Logo from "@/lib/img/vaeio.png";

const HeroBlog = () => {
  return (
    <section className="min-h-full bg-gradient-to-r from-blue-500 to-blue-700 max-container padding-container flex items-center justify-center flex-col gap-8 py-10 pb-16 md:gap-16 lg:py-20 xl:flex-row min-w-full">
      <div className="mx-auto flex-grow flex flex-col items-center justify-center text-center m-10 md:w-3/4 md:text-left md:flex-row md:items-start md:justify-between md:ml-24">
        <div className="transition-transform duration-1000 transform hover:translate-y-4">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-white text-3xl md:text-4xl lg:text-4xl font-medium">
              <span className="text-primary-0 text-5xl md:text-6xl lg:text-6xl font-medium">
                Conteúdo
              </span>
            </p>
            <p className="text-white text-3xl md:text-4xl lg:text-4xl font-medium">
              <span className="text-primary-0 text-5xl md:text-6xl lg:text-6xl font-medium">
                Exclusivo
              </span>
            </p>
            <p className="text-white text-3xl md:text-4xl lg:text-4xl mb-4 font-medium">
              <span className="text-primary-0 text-5xl md:text-6xl lg:text-6xl font-medium">
                para Leitores
              </span>
            </p>
            <p className="text-green-100 text-left text-sm md:text-base">
              Explore nosso blog e descubra conteúdos exclusivos para pequenas e
              médias empresas.
            </p>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <Image
            src={Logo}
            alt="logo"
            width="479"
            height="368"
            className="w-full md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBlog;
