import Image from "next/image";
import React from "react";
import Pathname from "./Pathname";

const UnderConstructionPage = () => {
  return (
    <>
      <div className="flex justify-center w-full h-screen bg-[white] pt-[140px]">
        <div>
          <Image
            src="/comingSoon.jpeg"
            width={450}
            height={450}
            className="rounded-3xl"
            alt="Under Construction"
          />
        </div>
      </div>
    </>
  );
};

export default UnderConstructionPage;
