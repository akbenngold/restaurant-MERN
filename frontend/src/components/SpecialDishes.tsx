import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from "../data/menu.json";
import Cards from "./Cards";

const singleNextArrow = ({ className, style, onClick }) => {};

function SpecialDishes() {
  const slider = React.useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="section-container my-20">
      <div className="text-left">
        <p className="subtitle">Special Dishes</p>
        <h2 className="title md:w-[520px]">Standout Dishes From Our Menu</h2>
      </div>

      <Slider {...settings} className="  mt-10 space-x-5">
        {data
          .filter((item) => {
            return item.category === "popular";
          })
          .map((item) => {
            return <Cards key={item._id} item={item} />;
          })}
      </Slider>
    </div>
  );
}

export default SpecialDishes;
