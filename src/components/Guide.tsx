"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import Showcase1 from "@/lib/img/showcase.svg";
import Showcase2 from "@/lib/img/showcase2.svg";
import Showcase3 from "@/lib/img/showcase3.svg";
import Icon1 from "@/lib/img/icon1.svg";
import Icon2 from "@/lib/img/icon2.svg";
import Icon3 from "@/lib/img/icon3.svg";
import Icon4 from "@/lib/img/DropdownIcon.svg";
import Button2 from "./Button2";
import { useState } from "react";
import "animate.css";
import "@/app/styles/animations.css";
import {
  FaShoppingCart,
  FaStore,
  FaCreditCard,
  FaUsers,
  FaBook,
  FaMoneyBill,
  FaGlobe,
  FaMobileAlt,
  FaDesktop,
  FaCogs,
  FaDatabase,
  FaMagic,
  FaTv,
} from "react-icons/fa";

const Guide = () => {
  const [selectBtn, setSelectBtn] = useState(Showcase2);
  const [tab, setTab] = useState("primula");

  const handleBtnClick = () => {
    window.alert("Button clicked!");
  };

  const handleTabChange = (newTab: string) => {
    setTab(newTab);
    updateSelectBtn(newTab);
  };

  const updateSelectBtn = (tab: string) => {
    switch (tab) {
      case "primula":
        setSelectBtn(Showcase2);
        break;
      case "solutionti":
        setSelectBtn(Showcase1);
        break;
      case "consultoria":
        setSelectBtn(Showcase3);
        break;
      default:
        setSelectBtn(Showcase1);
    }
  };

  return (
    <section className=" bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen flex flex-col items-center justify-center text-center">
      <p className="text-primary-0 text-3xl font-bold animate__animated animate__fadeIn">
        CONHEÇA AS NOSSAS SOLUÇÕES PARA A SUA EMPRESA
      </p>

      <div className="flex flex-col-reverse lg:flex-row w-full mt-8 p-8">
        <div className="lg:w-1/2 p-8 animate__animated animate__fadeInLeft">
          <div className="flex justify-between mb-6">
            <Button
              type="button"
              title="Prímula"
              icon={Icon1}
              bg={
                tab == "primula"
                  ? "bg-blue-600 shadow shadow-green-500"
                  : "bg-blue-400"
              }
              onClick={() => handleTabChange("primula")}
              className={`transition-all duration-300 ease-in-out  p-2 rounded-md`}
            />
            <Button
              type="button"
              title="Soluções TI"
              icon={Icon2}
              bg={
                tab == "solutionti"
                  ? "bg-blue-600 shadow shadow-green-500"
                  : "bg-blue-400"
              }
              onClick={() => handleTabChange("solutionti")}
            />
            <Button
              type="button"
              title="Consultoria"
              icon={Icon3}
              bg={
                tab == "consultoria"
                  ? "bg-blue-600 shadow shadow-green-500"
                  : "bg-blue-400"
              }
              onClick={() => handleTabChange("consultoria")}
            />
          </div>
          {tab === "primula" ? (
            <div className="mb-6 text-primary-0">
              <p className="text-2xl font-bold mb-6">O Que É Prímula?</p>
              <p className="font-normal mb-6">
                O Prímula é uma plataforma de gestão de negócios desenvolvida
                para pequenas e médias empresas.
              </p>
              <p className="font-bold mb-6">Principais Módulos</p>

              <div className="flex flex-wrap justify-center items-center text-primary-0 mb-6 transition-all duration-300">
                <div className="flex items-center mb-4 mr-6 p-3 bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
                  <FaShoppingCart size={24} className="mr-2 text-yellow-900" />
                  <div>
                    <p className="text-sm font-bold mb-1">Compras</p>
                  </div>
                </div>
                <div className="flex items-center mb-4 mr-6 p-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
                  <FaStore size={24} className="mr-2 text-green-900" />
                  <div>
                    <p className="text-sm font-bold mb-1">Comercial</p>
                  </div>
                </div>
                <div className="flex items-center mb-4 mr-6 p-3 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
                  <FaCreditCard size={24} className="mr-2 text-blue-900" />
                  <div>
                    <p className="text-sm font-bold mb-1">Contabilidade</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center items-center text-primary-0 mb-6 transition-all duration-300">
                <div className="flex items-center mb-4 mr-6 p-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
                  <FaUsers size={24} className="mr-2 text-purple-900" />
                  <div>
                    <p className="text-sm font-bold mb-1">Recursos Humanos</p>
                  </div>
                </div>
                <div className="flex items-center mb-4 mr-6 p-3 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
                  <FaTv size={24} className="mr-2 text-indigo-900" />
                  <div>
                    <p className="text-sm font-bold mb-1">BrandSync</p>
                  </div>
                </div>
                <div className="flex items-center mb-4 p-3 bg-gradient-to-r from-pink-400 to-red-500 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
                  <FaMoneyBill size={24} className="mr-2 text-pink-900" />
                  <div>
                    <p className="text-sm font-bold mb-1">Finanças</p>
                  </div>
                </div>
              </div>
            </div>
          ) : tab === "solutionti" ? (
            <div className="flex flex-wrap justify-center items-center text-primary-0 mb-6 transition-all duration-300">
              <div className="flex items-center mb-4 mr-6 p-4 bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
                <FaGlobe size={40} className="mr-4 text-yellow-900" />
                <div>
                  <p className="text-xl font-bold mb-1">Websites Comerciais</p>
                  <p className="text-sm">& Corporativos</p>
                </div>
              </div>
              <div className="flex items-center mb-4 mr-6 p-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
                <FaMobileAlt size={40} className="mr-4 text-green-900" />
                <div>
                  <p className="text-xl font-bold mb-1">
                    Aplicativos para Celulares
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-4 mr-6 p-4 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
                <FaDesktop size={40} className="mr-4 text-blue-900" />
                <div>
                  <p className="text-xl font-bold mb-1">Sistemas de Gestão</p>
                  <p className="text-sm">para Empresas</p>
                </div>
              </div>
              <div className="flex items-center mb-4 mr-6 p-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
                <FaCogs size={40} className="mr-4 text-purple-900" />
                <div>
                  <p className="text-xl font-bold mb-1">
                    Arquitetura de Softwares
                  </p>
                </div>
              </div>
            </div>
          ) : tab === "consultoria" ? (
            <div>
              <p className="text-primary-0 text-2xl font-bold mb-6">
                Deixe a sua gestão conosco
              </p>
              <p className="text-primary-0 mb-6">
                Nossa expertise em gestão financeira, combinada ao compromisso
                inabalável com o sucesso de nossos clientes, você pode confiar
                em nós para fornecer soluções financeiras inteligentes e
                estratégicas que impulsionarão sua estabilidade financeira e o
                crescimento de seus negócios.
              </p>
              <p className="text-primary-0 mb-6">
                Entre em contato connosco hoje mesmo para começar a trilhar o
                caminho para uma gestão financeira sólida e eficaz.
              </p>
            </div>
          ) : null}
          <Button2 type="button" title="Saber Mais" icon={Icon4} />
        </div>

        <div className="lg:w-1/2 p-8 animate__animated animate__fadeInRight">
          <div className="max-w-400 max-h-400 overflow-hidden">
            <Image
              src={selectBtn}
              alt="logo"
              width={400}
              height={400}
              className="object-cover flex justify-center align-middle"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
