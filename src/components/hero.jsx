import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 ">
      {/* -------------------Overlay----------------- */}
      <div className="max-h-[500px] relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          <h1 classname="">
            The <span className="text-orange-600">Best</span>
          </h1>
          <h1 classname="">
            <span className="text-orange-600">Foods </span>Delivery
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Harmburger"
        />
      </div>
    </div>
  );
};

export default Hero;
