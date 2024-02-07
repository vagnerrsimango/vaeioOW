import React from "react";
import "animate.css";
import flashyImage from "@/lib/img/loop.png";
import Image from "next/image";

const GuideC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 text-primary-0 ml-10">
            <h3 className="text-3xl text-primary-0 font-bold mb-4">
              Peça já uma avaliação inicial de viabilidade
            </h3>
            <div className="mb-6  text-primary-0">
              <p>
                Esta avaliação é gratuita, sem compromissos e serve somente para
                percebermos se podemos ou não trazer mais valias ao seu negócio.
                <br />
                <br />
                Para tal, basta responder às seguintes questões:
              </p>
              <ul className="list-disc pl-4 mt-4">
                <li>O que é o meu negócio?</li>
                <li>
                  Quem é o meu <strong>público alvo</strong>?
                </li>
                <li>Como é que os meus clientes chegam até mim?</li>
                <li>
                  Quais os <strong>objetivos</strong> a curto, médio e longo
                  prazo?
                </li>
              </ul>
              <p className="mt-4">
                Faça chegar-nos as respostas a estas questões e entraremos em
                contacto consigo. A equipa de consultoria irá analisar a
                informação que nos enviar e avaliar se o seu negócio se enquadra
                no tipo de <strong>Consultoria Web</strong> que oferecemos. Caso
                consideremos que o projeto de parceria tem viabilidade,
                enviamos-lhe uma proposta de acompanhamento personalizado ao seu
                negócio.
              </p>
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="mb-6">
              <Image
                src={flashyImage}
                alt="Avaliação de Viabilidade Consultoria Web"
                width={221}
                height={221}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideC;
