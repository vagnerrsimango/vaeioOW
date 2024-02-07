import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  full?: boolean;
};

const Button3 = ({ type, title, icon, full }: ButtonProps) => {
  return (
    <button
      className={`flex items-center gap-4 mr-6 h-10 bg-blue-400 bg-opacity-10  ${
        full && "w-full"
      }`}
      type={type}
    >
      {icon && (
        <Image
          src={icon}
          alt={title}
          width={10}
          height={10}
          className="mr-4 ml-8"
        />
      )}
      <label className="bold-16 text-primary-0 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button3;
