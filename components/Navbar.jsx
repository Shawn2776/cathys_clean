"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="hidden md:flex navbar bg-bgSoft px-32 mx-auto items-center">
        <div className="flex-1 items-center">
          <Link href="/">
            <Image
              alt="Cathy's Clean logo"
              src="/logo.png"
              height={95}
              width={95}
              className="pt-4"
            />{" "}
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/booking">Booking</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav>
        <div className="md:hidden flex justify-between navbar bg-bgSoft px-4 relative">
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
          } absolute top-10 left-0 right-0 z-10 bg-bgSoft px-4 py-4 text-white transition-all duration-300`}
        >
          <ul className="flex flex-col gap-4 pt-4 font-extrabold text-center border-t">
            <li>
              <Link onClick={() => handleClick()} href="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={() => handleClick()} href="/services">
                Services
              </Link>
            </li>
            <li>
              <Link onClick={() => handleClick()} href="/booking">
                Booking
              </Link>
            </li>
            <li>
              <Link onClick={() => handleClick()} href="/contact">
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
