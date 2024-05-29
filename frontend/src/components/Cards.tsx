import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

type CardsProps = {
  item: {
    image: string;
    price: number;
    recipe: string;
    name: string;
    _id: string;
  };
};

const Cards = ({ item }: CardsProps) => {
  const [heartFill, setHeartFill] = useState(false);

  const handleHeartFill = () => {
    setHeartFill(!heartFill);
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl relative">
        <div
          className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green ${
            heartFill ? "text-rose-500" : "text-white"
          }`}
          onClick={handleHeartFill}
        >
          <FaHeart className="h-5 w-5 cursor-pointer" />
        </div>
        <Link to={`/menu/${item._id}`}>
          {" "}
          <figure>
            <img
              src={item.image}
              alt="image"
              className="hover:scale-105 transition-all duration-200 md:h-72"
            />
          </figure>
        </Link>

        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p>{item.recipe}</p>
          <div className="card-actions justify-between items-center mt-2">
            <h5 className="font-semibold">
              <span className="text-red text-sm">$</span>
              {item.price}
            </h5>{" "}
            <button className="btn  bg-green text-white">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
