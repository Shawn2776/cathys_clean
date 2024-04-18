import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-bgSoft px-32 mx-auto items-center">
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
    </div>
  );
};

export default Navbar;
