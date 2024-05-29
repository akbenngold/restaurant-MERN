import Banner from "../components/Banner.tsx";
import Categories from "../components/Categories.tsx";
import SpecialDishes from "../components/SpecialDishes.tsx";
import Story from "../components/Story.tsx";
import Testimonials from "../components/Testimonials.tsx";

export const Home = () => {
  return (
    <div className="flex flex-col gap-[8rem] mb-[5rem]">
      <Banner />
      <Categories />
      <SpecialDishes />
      <Testimonials />
      <Story />
    </div>
  );
};
