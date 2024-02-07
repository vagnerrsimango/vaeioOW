import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import LogoWhite from "@/lib/img/logo-white.svg";
import Menu from "@/lib/img/menu.svg";

const NavbarPrimula = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-gradient-to-r from-gradient-200 via-blue-400 to-gradient-100 z-30">
      <div className="max-container padding-container mt-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src={LogoWhite}
              alt="logo"
              width={74}
              height={29}
              className="ml-16"
            />
          </Link>

          <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                {link.key === "primula" ? (
                  <Link
                    href="src\app\components\hero.tsx"
                    className="regular-16 text-primary-0 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    key={link.key}
                    className="regular-16 text-primary-0 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <Image
            src={Menu}
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:flexCenter mr-16"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavbarPrimula;
