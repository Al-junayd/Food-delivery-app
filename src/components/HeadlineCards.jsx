import React from "react";

const HeadlineCards = (props) => {
  return (
    <div>
      {/* Card */}
      <div className="hover:shadow-2xl cursor-pointer rounded-xl relative">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">{props.name}</p>
          <p className="px-2">{props.through} Daily</p>
          <button className="border-none bg-white text-black mx-2 absolute bottom-4 hover:shadow-md hover:text-white hover:bg-orange-600">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={props.img}
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
