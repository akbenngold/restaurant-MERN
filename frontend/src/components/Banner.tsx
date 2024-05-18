import React from "react";
import banner from "../assets/banner.png"
function Banner() {
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
      <div className="md:w-1/2"><img src={banner} alt="" /></div>

        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Dive into Delights Of Delectable{" "}
            <span className="text-green">Food</span>
          </h2>
          <p className="text-xl text-[#4A4A4A]">Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
        <button className="btn bg-green rounded-full text-white font-semibold px-8 py-3">Order Now</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
