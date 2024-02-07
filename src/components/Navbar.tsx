"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { Menu } from "@headlessui/react";
import { NAV_LINKS } from "@/constants";
import LogoWhite from "@/lib/img/logo-white.svg";
import MenuIcon from "@/lib/img/menu.svg";
import useNavScroll from "@/hooks/useNavScroll";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { scroll } = useNavScroll();
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed shadow-sm ${
        scroll > 0 ? "bg-black-500 transition-colors shadow-black-400" : ""
      } top-0 left-0 right-0 w-full z-30`}
    >
      <div className="max-container padding-container mt-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src={LogoWhite}
              alt="logo"
              width={74}
              height={29}
              className="ml-16 mb-2 hover:scale-110"
            />
          </Link>

          <ul
            className={`hidden ml-52 h-full gap-12 lg:flex ${
              isMenuOpen ? "hidden" : ""
            }`}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                {link.key === "primula" ? (
                  <Link
                    href="/primula"
                    className={`regular-16 text-primary-0 flexCenter cursor-pointer pb-1.5 transition-all ${
                      pathname === "/primula" ? "font-bold" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                    key={link.key}
                    className={`regular-16 text-primary-0 flexCenter cursor-pointer pb-1.5 transition-all ${
                      pathname === link.href ? "font-bold" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <a
            href="https://api.whatsapp.com/send?phone=+258846805329"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-0 flex items-center"
          >
            <span className="text-sm ml-2">Contacte-nos! </span> <br />
            <FaPhone className="text-sm ml-4" />
          </a>
          <Menu>
            {isMenuOpen && (
              <Menu.Items className="absolute top-full right-0 mt-2 bg-white border border-gray-300 divide-y divide-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active ? "bg-blue-500 text-primary-0" : "text-primary-0"
                      } group flex items-center px-4 py-2 text-sm`}
                      href="/account-settings"
                    >
                      Módulo 1
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active ? "bg-blue-500 text-primary-0" : "text-primary-0"
                      } group flex items-center px-4 py-2 text-sm`}
                      href="/documentation"
                    >
                      Modulo 2
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item disabled>
                  <span className="opacity-75 px-4 py-2 text-sm text-primary-0">
                    Módulo 3 (Brevemente!)
                  </span>
                </Menu.Item>
              </Menu.Items>
            )}
            <Menu.Button
              className="px-4 py-2 text-sm font-medium text-primary-0 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75"
              onClick={toggleMenu}
            >
              <Image
                src={MenuIcon}
                alt="logo"
                className="ml-16 hover:scale-110"
              />
            </Menu.Button>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
