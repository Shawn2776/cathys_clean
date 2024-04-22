"use client";

import { usePathname } from "next/navigation";
import React from "react";

const Pathname = () => {
  const pathname = usePathname();
  const subPathname = pathname.split("/").pop();
  const firstLetter = subPathname.charAt(0).toUpperCase();
  const ca = firstLetter + subPathname.slice(1);

  return <h1 className="w-full text-3xl text-center">{ca}</h1>;
};

export default Pathname;
