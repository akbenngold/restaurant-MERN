import React from "react";
import banner2 from "../assets/banner2.png";
import review from "../assets/review.png";

function Testimonials() {
  return (
    <div className="flex flex-col section-container md:flex-row ">
      <div className="md:w-1/2">
        <img src={banner2} alt="" />
      </div>
      <div className="md:w-1/2 space-y-7 px-4 flex flex-col justify-center">
        <div>
          <p className="subtitle mb-10">Testimonials</p>
          <h2 className="title">What Our Customers Say About Us</h2>
        </div>
        <p className="text-[#555555] text-lg md:text-xl">
          “I had the pleasure of dining at Foodi last night, and I'm still
          raving about the experience! The attention to detail in presentation
          and service was impeccable”
        </p>
        <img src={review} alt="" className="w-[250px]" />
      </div>
    </div>
  );
}

export default Testimonials;
