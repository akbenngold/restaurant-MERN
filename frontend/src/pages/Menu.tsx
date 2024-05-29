import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import data from "../data/menu.json";
import Cards from "../components/Cards";

type menuType = { category: string /* other properties */ }[];
type selectedCategoryType =
  | "all"
  | "salad"
  | "pizza"
  | "soups"
  | "dessert"
  | "drinks";

function Menu() {
  const [menu, setMenu] = useState<menuType>([]);
  const [filtered, setFiltered] = useState<menuType>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<selectedCategoryType>("all");
  const [sortOption, setSortOption] = useState<string>("default");

  useEffect(() => {
    setMenu(data);
    setFiltered(data);
  }, []);

  const filterItems = (category: selectedCategoryType) => {
    const filteredItems =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);
    setFiltered(filteredItems);
  };

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
      <div className="section-container">
        <nav>
          <ul className="flex gap-4 justify-center">
            <li>
              <NavLink to="#" onClick={() => filterItems("all")}>
                All
              </NavLink>
            </li>
            <li>
              <NavLink to="#" onClick={() => filterItems("salad")}>
                Salad
              </NavLink>
            </li>
            <li>
              <NavLink to="#" onClick={() => filterItems("pizza")}>
                Pizza
              </NavLink>
            </li>
            <li>
              <NavLink to="#" onClick={() => filterItems("soups")}>
                Soups
              </NavLink>
            </li>
            <li>
              <NavLink to="#" onClick={() => filterItems("dessert")}>
                Dessert
              </NavLink>
            </li>
            <li>
              <NavLink to="#" onClick={() => filterItems("drinks")}>
                Drinks
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filtered.map((item, index) => (
            <Cards key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
