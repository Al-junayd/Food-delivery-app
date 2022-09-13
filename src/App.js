import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import HeadlineCards from "./components/HeadlineCards";
import HeadlineData from "./Data/HeadlineData";
import Food from "./components/Food";
import Categories from "./components/category";

function App() {
  const headCards = HeadlineData.map((card) => {
    return (
      <HeadlineCards
        name={card.name}
        through={card.through}
        button={card.button}
        img={card.img}
      />
    );
  });

  return (
    <div className="">
      <Navbar />
      <Hero />
      <div className="max-w-[1640px] mx-auto p-4 py-4 grid md:grid-cols-3 gap-6 md:w-full">
        {headCards}
      </div>
      <Food />
      <Categories />
    </div>
  );
}

export default App;
