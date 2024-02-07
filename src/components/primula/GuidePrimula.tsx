"use client";
import React from "react";
import logo1 from "@/lib/img/modlog1.svg";
import logo2 from "@/lib/img/modlog2.svg";
import logo3 from "@/lib/img/modlog3.svg";
import logo4 from "@/lib/img/modlog4.svg";
import PrimulaCard from "./PrimulaCard";
import "animate.css";

const GuidePrimula = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen flex flex-col items-center justify-center text-center">
      <p className="text-green-300 mt-8 text-3xl font-bold mb-4">
        MÓDULOS DO PRIMULA
      </p>
      <p className="text-primary-0">
        Composto por um total de 6 módulos, o prímula te oferece as ferramentas
        indispensáveis para a sua empresa
      </p>

      <div className="grid grid-cols-3 gap-6">
        <PrimulaCard
          icon={logo1}
          borderColor="primary-white-0"
          title="PRÍMULA"
          subtitle="MÓDULO FINANÇAS"
          description="Fornece às empresas as ferramentas necessárias para gerir eficazmente as suas operações financeiras, monitorizar os fluxos de tesouraria e tomar decisões informadas com base em dados financeiros precisos."
        />

        <PrimulaCard
          icon={logo2}
          borderColor="purple-100"
          title="PRÍMULA"
          subtitle="MÓDULO RECURSOS HUMANOS"
          description="Além de gestão de Recursos Humanos eficaz, permite a gestão de informações dos colaboradores, o processamento de salários e a optimização de processos de recrutamento e seleção."
        />

        <PrimulaCard
          icon={logo3}
          borderColor="purple-100"
          title="PRÍMULA"
          subtitle="MÓDULO CONTABILIDADE"
          description="Permite que as empresas façam a gestão das suas finanças, cumprir com as obrigações fiscais e manter um controle rigoroso de suas operações contábeis."
        />

        <PrimulaCard
          icon={logo4}
          borderColor="purple-100"
          title="PRÍMULA"
          subtitle="MÓDULO POS"
          description="Permite rastrear todas as transações, manter registos precisos e oferecer aos clientes informações claras e organizadas sobre suas compras."
        />
      </div>
    </section>
  );
};

export default GuidePrimula;
