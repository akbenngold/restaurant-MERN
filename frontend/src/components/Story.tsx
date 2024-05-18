import React from "react";
import gift from "../assets/fi-rr-gift.png";
import salad from "../assets/fi-rr-salad.png";
import cart from "../assets/fi-rr-shopping-cart-check.png";
import time from "../assets/fi-rr-time-fast.png";
const services = [
  {
    id: 1,
    title: "Catering",
    desc: "Delight your guests with our flavors and  presentation",
    image: salad,
  },
  {
    id: 2,
    title: "Fast Delivery",
    desc: "We deliver your order promptly to your door",
    image: time,
  },
  {
    id: 3,
    title: "Online ordering",
    desc: "Explore menu & order with ease using our Online Ordering ",
    image: cart,
  },
  {
    id: 4,
    title: "Gift cards",
    desc: "Give the gift of exceptional dining with Foodi Gift Cards",
    image: gift,
  },
];

function Story() {
  return (
    <div className="section-container flex flex-col gap-8 lg:flex-row">
      <div className="md:w-1/2 space-y-7 px-4">
        <div>
          <p className="subtitle">Our story and services</p>
          <h2 className="title md:w-[520px]">
            Our Culinary Journey And Services
          </h2>
        </div>
        <p className="text-[#555555]">
          Rooted in passion, we curate unforgettable dining experiences and
          offer exceptional services, blending culinary artistry with warm
          hospitality.
        </p>
        <button className="btn px-8 py-3 bg-green text-white rounded-full text-md">
          Explore
        </button>
      </div>
      <div className="md:w-1/2 grid grid-cols-2 grid-rows-2">
        {services.map((service) => {
          return (
            <div
              key={service.id}
              className="flex flex-col items-center justify-center gap-4 m-4 rounded-lg shadow-lg p-6 hover:-translate-y-4 duration-300 transition-all cursor-pointer"
            >
              <div>
                <img src={service.image} alt="" />
              </div>
              <h3 className="uppercase text-[#5FE26C] font-semibold">
                {service.title}
              </h3>
              <p className="text-[#90BD95] max-width-[200px] text-center">
                {service.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Story;
