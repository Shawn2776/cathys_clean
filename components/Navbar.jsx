"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Pathname from "./Pathname";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="items-center justify-between hidden mx-auto ml-32 mr-32 md:flex ">
        <Link href="/">
          <Image
            alt="Cathy's Clean logo"
            src="/logo.png"
            height={65}
            width={65}
            className="py-2"
          />
        </Link>

        <div>
          <ul className="flex gap-4">
            <li className="text-xl font-semibold">
              <Link
                className={`text-xl font-extrabold text-black capitalize hover:text-gray-500 ${
                  pathname === "/about" && "underline"
                }`}
                href="/about"
              >
                About
              </Link>
            </li>
            <li className="text-xl font-semibold">
              <Link
                className={`text-xl font-extrabold text-black capitalize cursor-pointer hover:text-gray-500 ${
                  pathname === "/services" && "underline"
                }`}
                href="/services"
              >
                Services
              </Link>
            </li>
            <li className="text-xl font-semibold">
              <Link
                className={`text-xl font-extrabold text-black capitalize cursor-pointer hover:text-gray-500 ${
                  pathname === "/booking" && "underline"
                }`}
                href="/booking"
              >
                Booking
              </Link>
            </li>
            <li className="text-xl font-semibold">
              <Link
                className={`text-xl font-extrabold text-black capitalize cursor-pointer hover:text-gray-500 ${
                  pathname === "/contact" && "underline"
                }`}
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav>
        <div className="relative flex justify-between px-4 md:hidden navbar">
          <div>
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image
                src="/logo.png"
                width={50}
                height={50}
                alt="Cathy's Clean logo"
              />
            </Link>
          </div>
          <div>
            <Pathname />
          </div>

          <div>
            {isOpen ? (
              <button onClick={() => handleClick()} className="text-white">
                <IoClose className="w-10 h-10" />
              </button>
            ) : (
              <button onClick={() => handleClick()} className="text-white">
                <FiMenu className="w-10 h-10" />
              </button>
            )}
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-15 left-0 right-0 z-10 bg-[#F8973B] px-4 py-4 text-white transition-all duration-300`}
        >
          <ul className="flex flex-col gap-4 pt-6 font-extrabold text-center border-t">
            <li>
              <Link
                onClick={() => handleClick()}
                href="/about"
                className={`${
                  pathname === "/about" ? "text-gray-500" : ""
                } text-2xl font-semibold`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/services" ? "text-gray-500" : ""
                } text-2xl font-semibold`}
                onClick={() => handleClick()}
                href="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/booking" ? "text-gray-500" : ""
                } text-2xl font-semibold`}
                onClick={() => handleClick()}
                href="/booking"
              >
                Booking
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  pathname === "/contact" ? "text-gray-500" : ""
                } text-2xl font-semibold`}
                onClick={() => handleClick()}
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
