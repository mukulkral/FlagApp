import React, { useRef, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Sidebar = ({ show, toggleMenu }) => {
  const arrowRef = useRef();
  const handleClick = () => {};

  return (
    <div
      className={`h-1/2 w-full backdrop-blur-md  bg-white/10 fixed top-0 left-0 shadow-xl duration-1000 md:hidden z-20 ${
        show ? "" : "translate-y-[-600px]"
      }`}
    >
      {show && (
        <FaXmark
          className="absolute top-4 right-12 text-[50px] cursor-pointer "
          onClick={toggleMenu}
        />
      )}
      <ul className="text-[25px] px-20 py-10 leading-[50px]">
        <Link to="/" className="group">
          <li className="cursor-pointer hover:bg-slate-500/40 px-5 rounded-sm duration-200 ">
            <div className="w-[150px] flex justify-between items-center">
              Home
              <FaArrowRightLong className=" group-hover:translate-x-10 duration-200" />
            </div>
          </li>
        </Link>

        <Link to="/about" className="group">
          <li className="cursor-pointer hover:bg-slate-500/40 px-5 rounded-sm duration-200">
            <div className="w-[150px] flex justify-between items-center">
              About
              <FaArrowRightLong className="group-hover:translate-x-10 duration-200" />
            </div>
          </li>
        </Link>

        <Link to="/country" className="group">
          <li className="cursor-pointer hover:bg-slate-500/40 px-5 rounded-sm duration-200">
            <div className="w-[150px] flex justify-between items-center">
              Country
              <FaArrowRightLong className="group-hover:translate-x-10 duration-200" />
            </div>
          </li>
        </Link>

        <Link to="contact" className="group">
          <li className="cursor-pointer hover:bg-slate-500/40 px-5 rounded-sm duration-200">
            <div className="w-[150px] flex justify-between items-center">
              Contact
              <FaArrowRightLong className="group-hover:translate-x-10 duration-200" />
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
