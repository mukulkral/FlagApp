import React from "react";
import { FaXmark } from "react-icons/fa6";

const Sidebar = ({ show, toggleMenu }) => {
  return (
    <div className={`h-screen w-screen duration-200 absolute top-0 left-0`}>
      <div
        className={`h-1/2 w-full backdrop-blur-md  bg-white/10 fixed top-0 left-0 shadow-xl duration-1000 md:hidden z-20 ${
          show ? "" : "translate-y-[-600px]"
        }`}
      >
        {show && (
          <FaXmark
            className="absolute top-4 right-12 text-[50px] cursor-pointer"
            onClick={toggleMenu}
          />
        )}
        <ul className="text-[25px] px-20 py-10 leading-[50px]">
          <li className="cursor-pointer hover:bg-slate-500/40 px-5 rounded-sm duration-200">
            Home
          </li>
          <li className="cursor-pointer hover:bg-slate-500/40 px-5 rounded-sm duration-200">
            About
          </li>
          <li className="cursor-pointer hover:bg-slate-500/40 px-5 rounded-sm duration-200">
            Country
          </li>
          <li className="cursor-pointer hover:bg-slate-500/40 px-5 rounded-sm duration-200">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
