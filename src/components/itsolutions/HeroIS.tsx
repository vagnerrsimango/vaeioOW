import React from "react";
import Image from "next/image";
import Logos from "@/lib/img/logos.svg";
import Showcase1 from "@/lib/img/showcase.svg";

const HeroIS = () => {
  return (
    <section className="min-h-full bg-gradient-to-r from-blue-500 to-blue-700 max-container padding-container flex items-center justify-center flex-col gap-8 py-10 pb-32 md:gap-16 lg:py-20 xl:flex-row min-w-full">
      <div className="mx-auto flex-grow flex flex-col md:flex-row items-start justify-center overflow-hidden">
        <div className="text-left ml-24 m-10 md:w-1/2 transition-transform duration-1000 transform hover:translate-y-4">
          <p className="text-white text-4xl md:text-3xl lg:text-6xl font-outfit font-light mb-4 mt-4">
            <span className="text-green-100 font-extralight">
              SOLUÇÕES DE TECNOLOGIA
            </span>
          </p>
          <div className="flex flex-col items-start">
            <p className="text-white text-4xl md:text-3xl lg:text-3xl font-medium">
              <span className="text-primary-0 text-left text-3xl font-medium">
                Inovação
              </span>
            </p>
            <p className="text-white text-4xl md:text-3xl lg:text-3xl font-medium">
              <span className="text-primary-0 text-left text-3xl font-medium">
                Tecnológica
              </span>
            </p>
            <p className="text-white  text-4xl md:text-3xl mb-8 lg:text-3xl font-medium">
              <span className="text-primary-0 text-left text-3xl font-medium">
                para Empresas
              </span>
            </p>
            <p className="text-green-100 text-left text-xs md:text-base w-64 ">
              Desenvolvemos soluções de tecnologia inovadoras para impulsionar o
              crescimento e eficiência das empresas.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center transition-transform duration-1000 transform hover:translate-y-4">
          <Image
            src={Showcase1}
            width={479}
            height={368}
            alt="logo"
            className="mt-4"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroIS;
