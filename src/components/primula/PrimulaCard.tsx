import { ImageProps } from "next/image";
import React, { useEffect } from "react";
import Image from "next/image";
import Button3 from "../Button3";
import Icon4 from "@/lib/img/DropdownIcon.svg";

interface PrimulaCardProps {
  icon: ImageProps;
  borderColor: string;
  title: string;
  subtitle: string;
  description: string;
}

const PrimulaCard: React.FC<PrimulaCardProps> = ({
  icon,
  borderColor,
  title,
  subtitle,
  description,
}) => {
  useEffect(() => {
    const cards = document.querySelectorAll(".primula-card");
    cards.forEach((card, index) => {
      card.classList.add(`animate__delay-${index + 1}s`);
    });
  }, []);

  return (
    <div
      className={`border-${borderColor}-50 border rounded-lg m-6 p-4 primula-card animate__animated animate__fadeInDown`}
    >
      <div className="flex flex-col items-start mb-2 md:flex-row md:items-center">
        <Image {...icon} alt="logo" className="md:mr-2 mb-2 md:mb-0" />
        <div className="text-left">
          <p className="text-primary-0 mt-2 text-xs md:mt-0 md:text-sm">
            {title}
          </p>
          <p className="text-primary-0 font-bold text-sm">{subtitle}</p>
        </div>
      </div>

      <div className={`border-${borderColor}-50 border mt-2 p-2 mb-4`}>
        <p className="text-primary-0 text-left text-xs md:text-sm">
          {description}
        </p>
      </div>

      <Button3 type="button" title="Saber Mais" icon={Icon4} />
    </div>
  );
};

export default PrimulaCard;
