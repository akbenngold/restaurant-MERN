import React, { useEffect, useState } from "react";

function Menu() {
  const [menu, setMenu] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  return (
    <div>
      <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] to-100%">
        <div className="py-24 flex flex-col md:flex justify-center items-center gap-8">
          <div className="space-y-7 px-4 text-center">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              Dive into Delights Of Delectable{" "}
              <span className="text-green">Food</span>
            </h2>
            <p className="text-xl text-[#4A4A4A]">
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate
              Craftsmanship
            </p>
            <button className="btn bg-green rounded-full text-white font-semibold px-8 py-3">
              Order Now
            </button>
          </div>
        </div>
      </div>
      <div className="section-container"></div>
    </div>
  );
}

export default Menu;
