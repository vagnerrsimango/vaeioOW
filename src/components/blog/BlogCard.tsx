import React, { useEffect } from "react";
import Image from "next/image";
import Button3 from "../Button3";
import logo4 from "@/lib/img/modlog4.svg";

interface PrimulaCardProps {
  imageSrc: string;
  tags: string;
  date: string;
  borderColor: string;
  title: string;
  description: string;
  authorIconSrc: string;
  authorName: string;
  authorProfession: string;
}

const BlogCard: React.FC<PrimulaCardProps> = ({
  imageSrc,
  tags,
  date,
  borderColor,
  title,
  description,
  authorIconSrc,
  authorName,
  authorProfession,
}) => {
  useEffect(() => {
    const cards = document.querySelectorAll(".primula-card");
    cards.forEach((card, index) => {
      card.classList.add(`animate__delay-${index + 1}s`);
    });
  }, []);

  return (
    <div className="flex flex-col items-center h-30 w-60 m-10 p-4 bg-gradient-radial">
      <Image
        src={imageSrc}
        alt="logo"
        width={300}
        height={300}
        className="mb-2"
      />{" "}
      <div className="text-center">
        <p className="text-primary-0 mt-2 text-sm">
          {tags} - {date}
        </p>
        <p className="text-primary-0 mt-2 font-bold text-sm">{title}</p>
      </div>
      <div className={`mt-2 p-2 mb-4 text-center`}>
        <p className="text-gray-30 text-xs">{description}</p>
      </div>
      <div className="flex items-center mt-2 text-primary-0">
        <div className="rounded-full overflow-hidden mr-2">
          <Image src={authorIconSrc} alt="author icon" className="w-8 h-8" />
        </div>
        <div className="text-left">
          <p className="text-xs">{authorName}</p>
          <p className="text-xs">{authorProfession}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
