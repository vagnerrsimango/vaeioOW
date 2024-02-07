import React from "react";
import Link from "next/link";
import Image from "next/image";
import Circles from "@/lib/img/circles+icons.svg";
import Logo from "@/lib/img/vaeio.png";
import "@/app/styles/animations.css";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r min-h-screen from-blue-500 to-blue-700 container items-center justify-center flex flex-col py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row animate-fade-in-up">
      <div className="absolute top-20 transition-all duration-500 transform-gpu hover:scale-105 ">
        <Image src={Circles} alt="logo" width={580} height={580} />
      </div>
      <div className="flex transition-all duration-500 transform-gpu hover:scale-105 flex-col items-center justify-center mt-36 gap-4">
        <p className="text-primary-0 md:text-4xl text-md mr-auto sm:mx-auto font-bold">
          <span style={{ whiteSpace: "nowrap" }}>SOLUÇÕES PARA O SEU</span>{" "}
        </p>
        <p className="text-green-400 md:text-4xl text-md mr-auto sm:mx-auto font-bold">
          NEGÓCIO
        </p>
        <Image
          src={Logo}
          alt="logo"
          width={200}
          height={200}
          className="mt-4 transition-all duration-500 hover:scale-110"
        />
      </div>

      {/* <div className="transition-all duration-500 transform-gpu hover:scale-105 flex flex-col items-center justify-center">
        <div className="transform -translate-x-1/2 -translate-y-1/2 text-center transition-all duration-500 ">
          <p className="text-primary-0 md:text-4xl text-lg sm:text-primary-900 sm:mx-auto font-bold">
            <span style={{ whiteSpace: "nowrap" }}>SOLUÇÕES PARA O SEU</span>{" "}
            <span className="text-green-400">NEGÓCIO</span>
          </p>
          <div className="mt-4">
            <Image
              src={Logo}
              alt="logo"
              width={200}
              height={200}
              className="transition-all ml-20 duration-500 hover:scale-110"
            />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
