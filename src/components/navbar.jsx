import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* ---------Left Side---------- */}
      <div className="flex items-center">
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer p-2 hover:bg-orange-600 hover:text-white hover:rounded-full"
        >
          <AiOutlineMenu size={20} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:taext-4xl px-2 ">
          Best <span className="font-bold text-orange-600">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] cursor-pointer">
          <p className="bg-orange-600 text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* ------------Search Input--------------- */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch />
        <input
          className="bg-transparent p-2 focus:outline-none "
          type="text"
          placeholder="Search Foods"
        ></input>
      </div>
      {/* --------Cart Button-------- */}
      <button className="bg-orange-600 border-none hover:opacity-75 shadow-md text-white hidden md:flex  items-center py-2 rounded-full">
        <BsFillCartFill size={20} className=" mr-2" /> Cart
      </button>
      {/* ------------- Mobile Menu ---------- */}
      {/* --------Overlay-------- */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0 "></div>
      ) : (
        " "
      )}

      {/* --------------Side drawe Menu-------------*/}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white  z-10 "
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white  z-10  "
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute top-4 right-4 cursor-pointer p-2 hover:bg-orange-600 hover:text-white hover:rounded-full"
        />
        <h2 className="text-2l p-4 font-bold">
          {" "}
          Best <span className="font-bold text-orange-600">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800 ">
            <li className="text-xl text-orange-900 py-4 flex">
              {" "}
              <TbTruckDelivery
                size={25}
                className="mr-4 text-orange-600"
              />{" "}
              Orders{" "}
            </li>
            <li className="text-xl text-orange-800 py-4 flex">
              {" "}
              <MdFavorite size={25} className="mr-4 text-orange-600" />{" "}
              Favourites
            </li>
            <li className="text-xl text-orange-800 py-4 flex">
              {" "}
              <FaWallet
                size={25}
                className="mr-4 text-orange-600"
              /> Wallet{" "}
            </li>
            <li className="text-xl text-orange-800 py-4 flex">
              {" "}
              <MdHelp size={25} className="mr-4 text-orange-600" /> Help{" "}
            </li>
            <li className="text-xl text-orange-800 py-4 flex">
              {" "}
              <AiFillTag size={25} className="mr-4 text-orange-600" />{" "}
              Promotions{" "}
            </li>
            <li className="text-xl text-orange-800 py-4 flex">
              {" "}
              <BsFillSaveFill size={25} className="mr-4 text-orange-600" /> Best
              ones{" "}
            </li>
            <li className="text-xl text-orange-800 py-4 flex">
              {" "}
              <FaUserFriends size={25} className="mr-4 text-orange-600" />{" "}
              Invite Friends{" "}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
