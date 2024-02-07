import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  full?: boolean;
  className?: string;
  bg?: string;
  onClick?: () => void;
};

const Button = ({
  type,
  title,
  icon,
  full,
  onClick,
  bg = "bg-blue-400",
}: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-4 m-8 h-12 ${bg} ${
        full && "w-full"
      } sm:mr-0 sm:mb-2 sm:h-auto`}
      type={type}
      onClick={onClick}
      style={{ padding: "8px 16px" }}
    >
      {icon && (
        <div className="flex items-center justify-center">
          <Image src={icon} alt={title} width={40} height={40} />
          <label className="bold-16 p-1 text-primary-0 whitespace-nowrap cursor-pointer">
            {title}
          </label>
        </div>
      )}
    </button>
  );
};

export default Button;
