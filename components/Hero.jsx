import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#F6F5EA] text-white">
      <div className="hero-content flex-col lg:flex-row-reverse w-full border bg-[#4093CB] rounded-lg">
        <img src="hero.png" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Cathy&apos;s Clean</h1>
          <p className="py-6 font-extrabold">Where Sparkle Meets Shine! </p>
          <p className="mb-4 mr-20">
            Discover the magic of a truly clean space with Cathy&apos;s Clean.{" "}
            <br />
            Equipped with the best tools and eco-friendly products, we
            <br />
            ensure every corner of your home or office sparkles.
            <br />
            <br />
            From lemon-fresh floors to spotless windows, we bring
            <br />
            excellence to every swipe. Ready for a spotless environment?
            <br />
            Let Cathy&apos;s Clean handle the mess while you relax and enjoy
            <br />
            the cleanliness!
          </p>
          <button className="btn text-[#4093CB] bg-[#F6F5EA]">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
