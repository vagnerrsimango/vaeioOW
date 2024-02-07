import React from "react";
import { FaCogs, FaDesktop, FaGlobe, FaMobileAlt } from "react-icons/fa";
import ReactPlayer from "react-player";
import "animate.css";
import PrimulaCard from "./ISCard";
import video from "@/lib/vid/speedflow.mp4";
import logo1 from "@/lib/img/modlog1.svg";
import logo2 from "@/lib/img/modlog2.svg";
import logo3 from "@/lib/img/modlog3.svg";
import logo4 from "@/lib/img/modlog4.svg";
import Icon4 from "@/lib/img/DropdownIcon.svg";

const GuideIT = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 p-10">
      <div className="max-w-5xl mx-auto text-white">
        <h2 className="text-4xl text-primary-0 font-bold mb-8">
          Desenvolvemos aplicativos nativos e híbridos para dispositivos Android
          e iOS.
        </h2>

        <div className="mb-8">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=74SX19N1s6o&t=7s&pp=ygUZYXBwIGRldmVsb3BtZW50IHB1YmxpY2l0eQ%3D%3D"
            width="100%"
            height="400px"
          />
        </div>
      </div>
    </section>
  );
};

export default GuideIT;
