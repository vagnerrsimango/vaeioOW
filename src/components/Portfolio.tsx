import React from "react";
import Image from "next/image";
import trackPNG from "@/lib/img/trackingfake.png";
import Showcase1 from "@/lib/img/showcase.svg";
import Showcase2 from "@/lib/img/showcase2.svg";
import Showcase3 from "@/lib/img/showcase3.svg";
import Icon4 from "@/lib/img/DropdownIcon.svg";
import Button2 from "./Button2";

const Portfolio = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen flex flex-col items-center justify-center text-center">
      <p className="text-primary-0 text-3xl font-bold mb-8">
        TRABALHOS DESENVOLVIDOS POR NÓS
      </p>

      <div className="flex mt-8 p-8">
        <div className="w-1/2 flex justify-center items-center">
          <Image
            className="object-cover w-full h-full"
            src={trackPNG}
            alt="Portfolio Work"
          />
        </div>

        <div className="w-1/2 bg-white p-8">
          <div className="flex flex-col items-start">
            <p className="text-primary-0 text-3xl mb-4">GEOME</p>
            <p className="text-primary-0 mb-4 text-left">
              Geome é uma aplicação de tracking desenvolvida para fornecer uma
              solução eficaz e inteligente para rastreamento de dados. Com
              recursos avançados e uma interface amigável, permite monitorar e
              analisar dados de forma precisa e em tempo real.
            </p>
            <Button2 type="button" title="Saber Mais" icon={Icon4} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
