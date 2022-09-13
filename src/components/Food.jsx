import React, { useEffect, useState } from "react";
import { Data } from "../Data/data";
import Aos from "aos";
import "aos/dist/aos.css";

const Food = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [foods, setFoods] = useState(Data);

  // Filter by type
  const filterType = (category) => {
    setFoods(
      Data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // Filter by type
  const filterprice = (price) => {
    setFoods(
      Data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className=" max-w-[1640] px-4 py-12 mx-auto">
      <h1
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-orange-600 text-4xl text-center font-bold"
      >
        Top Rated Menu
      </h1>
      {/* ---- Filter Row----- */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* ======Filter type===== */}
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <p className="font-bold text-2xl mb-2 text-gray-700">Filter type</p>
          <div className="flex justify-between gap-1 flex-wrap">
            <button
              onClick={() => setFoods(Data)}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Chicken
            </button>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <p className="font-bold text-2xl mb-2 text-gray-700">Filter Price</p>
          <div lassName="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterprice("$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => filterprice("$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => filterprice("$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filterprice("$$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Display Foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            data-aos={item.scroll}
            data-aos-easing="linear"
            data-aos-duration="1500"
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt="{item.name}"
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
