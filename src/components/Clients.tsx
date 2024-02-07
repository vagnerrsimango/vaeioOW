"import use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import logo1 from "@/lib/img/logo1.png";
import logo2 from "@/lib/img/logo2.png";
import logo3 from "@/lib/img/logo3.png";
import logo4 from "@/lib/img/logo4.png";
import logo5 from "@/lib/img/logo5.png";
import logo6 from "@/lib/img/logo6.png";
import logo7 from "@/lib/img/logo7.png";
import logo8 from "@/lib/img/logo8.png";

const Clients = () => {
  const allLogos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];
  const [visibleLogos, setVisibleLogos] = useState(allLogos.slice(0, 5));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      showNextLogos();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const showNextLogos = () => {
    const nextIndex = (currentIndex + 1) % allLogos.length;
    const nextLogos = allLogos.slice(nextIndex, nextIndex + 5);
    setVisibleLogos(
      nextLogos.length === 5
        ? nextLogos
        : [...nextLogos, ...allLogos.slice(0, 5 - nextLogos.length)]
    );
    setCurrentIndex(nextIndex);
  };

  const showPrevLogos = () => {
    const prevIndex = (currentIndex - 1 + allLogos.length) % allLogos.length;
    const prevLogos = allLogos.slice(prevIndex, prevIndex + 5).reverse();
    setVisibleLogos(
      prevLogos.length === 5
        ? prevLogos
        : [...prevLogos, ...allLogos.slice(0, 5 - prevLogos.length)].reverse()
    );
    setCurrentIndex(prevIndex);
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen flex flex-col items-center justify-center text-center p-4">
      <p className="text-primary-0 text-3xl font-bold mb-4">NOSSOS CLIENTES</p>
      <div className="flex flex-wrap items-center mt-16 justify-center">
        <button className="text-white font-bold" onClick={showPrevLogos}>
          <FaChevronLeft className="text-primary-0 w-10 h-10" />
        </button>
        {visibleLogos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            width={150}
            height={150}
            className={`m-2 ${
              (index === 0 || index === 4) && "opacity-30"
            } opacity-100 transition-opacity duration-500 ease-in-out`}
          />
        ))}
        <button className="text-white font-bold" onClick={showNextLogos}>
          <FaChevronRight className="text-primary-0 w-10 h-10" />
        </button>
      </div>
      <div className="flex justify-between mt-4"></div>
    </section>
  );
};

export default Clients;
