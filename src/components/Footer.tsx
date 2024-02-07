import React from "react";
import Image from "next/image";
import LogoWhiteText from "@/lib/img/logotext.svg";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-800 max-w-[1280px] text-primary-0 text-center">
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-4 ml-8">
          <Image src={LogoWhiteText} alt="Icon 1" width={100} height={32} />
        </div>

        {/* <div className="flex items-center space-x-4 ml-16">
          <p className="text-sm text-primary-0 hover:font-bold cursor-pointer transition-all">
            Prímula
          </p>
          <p className="text-sm text-primary-0 hover:font-bold cursor-pointer transition-all">
            Soluções T.I
          </p>
          <p className="text-sm text-primary-0 hover:font-bold cursor-pointer transition-all">
            Consultoria
          </p>
          <p className="text-sm text-primary-0 hover:font-bold cursor-pointer transition-all">
            Blog
          </p>
        </div> */}

        {/* <div className="flex items-center space-x-4 ml-auto">
          <FaTwitter className="text-2xl text-primary-0 cursor-pointer hover:scale-125" />
          <FaFacebook className="text-2xl text-primary-0 cursor-pointer hover:scale-125" />
          <FaInstagram className="text-2xl text-primary-0 cursor-pointer hover:scale-125" />
          <FaLinkedin className="text-2xl text-primary-0 cursor-pointer hover:scale-125" />
        </div> */}

        <div className="flex items-center space-x-4 ml-auto mr-8">
          <p className="text-sm text-primary-0 hover:font-bold cursor-pointer ">
            <a href="/terms">Termos e Condições | Cookies</a>
          </p>
          <p className="text-sm hover:font-bold text-primary-0">
            &copy; 2023 VAE.IO. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
