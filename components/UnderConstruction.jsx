import Image from "next/image";
import React from "react";
import Pathname from "./Pathname";

const UnderConstructionPage = () => {
  return (
    <>
      <Pathname />
      <div className="bg-[url('/comingSoon.png')] h-screen bg-cover bg-center bg-no-repeat"></div>
    </>
  );
};

export default UnderConstructionPage;
