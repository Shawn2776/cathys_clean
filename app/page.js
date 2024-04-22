import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <>
      <main className="text-[#3094CB] bg-[#F7F5EA] hidden md:flex w-full justify-center">
        <div className="flex pt-20 pb-20">
          <div>
            <h1 className="text-5xl font-bold">Cathy&apos;s Clean</h1>
            <div className="animation-glow">
              <p className="py-6 font-extrabold">
                <em className="text-xl text-[#F79537] sparkle">
                  Where <span className="text-2xl animate-glow">Sparkle</span>{" "}
                  Meets <span className="text-2xl animate-glow">Shine</span>!
                </em>
              </p>
            </div>
            <p className="max-w-2xl mb-4 mr-20 text-black">
              Discover the magic of a truly clean space with Cathy&apos;s Clean.{" "}
              Equipped with the best tools and eco-friendly products, we ensure
              every corner of your home or office sparkles.{" "}
            </p>
            <p className="max-w-2xl mb-4 text-black">
              From lemon-fresh floors to spotless windows, we bring excellence
              to every swipe. Ready for a spotless environment? Let Cathy&apos;s
              Clean handle the mess while you relax and enjoy the cleanliness!
            </p>
            <Link
              href="/booking"
              className="btn text-[#4093CB] hover:bg-[#4093CB] hover:text-[#F6F5EA] bg-[#F6F5EA]"
            >
              Book Now
            </Link>
          </div>
          <div className="p-2">
            <Image
              src="/hero.png"
              width={450}
              height={450}
              className="rounded-3xl"
              alt="Hero image"
            />
          </div>
        </div>
      </main>
      <main className="text-[#3094CB] bg-[#F7F5EA] md:hidden flex flex-col">
        <div className="p-2">
          <Image
            src="/hero.png"
            width={450}
            height={450}
            className="rounded-3xl"
            alt="Hero image"
          />
        </div>
        <div className="text-center animation-glow">
          <p className="py-6 font-extrabold">
            <em className="text-xl text-[#F79537] sparkle">
              Where <span className="text-2xl animate-glow">Sparkle</span> Meets{" "}
              <span className="text-2xl animate-glow">Shine</span>!
            </em>
          </p>
        </div>
        <p className="px-4 mb-4 text-black ">
          Discover the magic of a truly clean space with Cathy&apos;s Clean.{" "}
          Equipped with the best tools and eco-friendly products, we ensure
          every corner of your home or office sparkles.{" "}
        </p>
        <p className="px-4 mb-4 text-black">
          From lemon-fresh floors to spotless windows, we bring excellence to
          every swipe. Ready for a spotless environment? Let Cathy&apos;s Clean
          handle the mess while you relax and enjoy the cleanliness!
        </p>
        <Link
          href="/booking"
          className="btn w-[50%] mx-auto mb-10 text-[#4093CB] hover:bg-[#4093CB] hover:text-[#F6F5EA] bg-[#F6F5EA]"
        >
          Book Now
        </Link>
      </main>
    </>
  );
};

export default HomePage;
