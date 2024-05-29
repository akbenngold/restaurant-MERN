import mainpng from "../assets/main.png";
import breakfastpng from "../assets/breakfast.png";
import dessertpng from "../assets/dessert.png";
import allpng from "../assets/all.png";

type Categories = {
  id: number;
  title: string;
  desc: string;
  images: string;
}[];

const categoryItems: Categories = [
  {
    id: 1,
    title: "Main Dish",
    desc: "86 dishes",
    images: mainpng,
  },
  {
    id: 2,
    title: "Breakfast",
    desc: "12 breakfasts",
    images: breakfastpng,
  },
  {
    id: 3,
    title: "Desert",
    desc: "48 desserts",
    images: dessertpng,
  },
  {
    id: 4,
    title: "Browse All",
    desc: "255 items",
    images: allpng,
  },
];

function Categories() {
  return (
    <div className="section-container py-16">
      <div className="text-center">
        <p className="subtitle">Customer's favourites</p>
        <h2 className="title">Popular Categories</h2>
      </div>
      <div className="flex flex-col sm:flex-row gap-8 justify-around items-center mt-12">
        {categoryItems.map((item) => {
          return (
            <div
              key={item.id}
              className="shadow-lg rounded-md bg-white py-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all"
            >
              <div className="flex w-full mx-auto justify-center items-center">
                <img
                  src={item.images}
                  alt="image"
                  className="bg-[#C1F1C6] p-5 rounded-full w-28 h-28"
                />
              </div>
              <div className="mt-5 space-y-1">
                <h3>{item.title}</h3>
                <p>({item.desc})</p>
              </div>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
