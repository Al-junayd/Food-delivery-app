import React, { useEffect } from "react";
import { categories } from "../Data/data";
import Aos from "aos";
import "aos/dist/aos.css";

const Categories = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="max-w-{1640} m-auto px-4 py-12">
      <h1
        data-aos="flip-right"
        // data-aos-easing="linear"
        // data-aos-duration="1500"
        className="text-orange-600 font-bold text-4xl text-center"
      >
        Top Rated Menu Items
      </h1>
      {/* ====Categories===== */}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 ">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-4 flex justify-between items-center"
          >
            <h2 className="font-bold sm:text-xl ">{item.name}</h2>
            <img className="w-20 " src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
