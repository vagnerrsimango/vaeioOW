import React from "react";
import Image from "next/image";
import LogoWhiteText from "@/lib/img/logotext.svg";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterPrimula = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-8">
      <div className="flex justify-around max-container">
        <div className="flex flex-col items-center hover:scale-110">
          <Image src={LogoWhiteText} alt="Icon 1" width={172} height={54} />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <p className="regular-16 font-bold text-primary-0 flexCenter cursor-pointer pb-1.5 transition-all ">
              Soluções
            </p>

            <p className="regular-10 text-primary-0 hover:font-bold flexCenter cursor-pointer pb-1.5 transition-all ">
              Prímula
            </p>
            <p className="regular-10 text-primary-0 hover:font-bold flexCenter cursor-pointer pb-1.5 transition-all ">
              T.I
            </p>
            <p className="regular-10 text-primary-0 hover:font-bold flexCenter cursor-pointer pb-1.5 transition-all ">
              Consultoria
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <p className="regular-16 text-primary-0 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            Conecta-te à nós
          </p>
          <div className="flex justify-center mt-4 ">
            <FaTwitter className="text-2xl   text-primary-0 mx-2 cursor-pointer hover:scale-125 " />
            <FaFacebook className="text-2xl  text-primary-0 mx-2 cursor-pointer hover:scale-125 " />
            <FaInstagram className="text-2xl  text-primary-0 mx-2 cursor-pointer hover:scale-125 " />
            <FaLinkedin className="text-2xl  text-primary-0 mx-2 cursor-pointer hover:scale-125" />
          </div>
        </div>
      </div>

      <div className="mt-4 text-center regular-16 text-primary-0 flexCenter cursor-pointer pb-1.5 transition-all ">
        <p>&copy; 2023 VAE.IO. Todos os direitos são reservados.</p>
      </div>
    </footer>
  );
};

export default FooterPrimula;
