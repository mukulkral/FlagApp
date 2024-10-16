import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import Sidebar from "./Sidebar";



const Header = () => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <>
      <header>
        <div
          className="text-white h-[70px] bg-gray-800 z-10
        
        flex justify-between items-center px-[50px] lg:px-[100px] xl:px-[200px] fixed top-0 left-0 w-full shadow-md shadow-slate-400"
        >
          <Link to="/">
            <h2 className="text-[30px]">WorldAtlas</h2>
          </Link>
          <ul className="hidden md:flex justify-center items-center gap-2 ">
            <Link to="/">
              <li className="cursor-pointer hover:text-black duration-150 hover:bg-white px-6 py-1 rounded-[20px]">
                Home
               

              </li>
         
            </Link>
            <Link to="/about">
              <li className="cursor-pointer hover:text-black duration-150 hover:bg-white px-6 py-1 rounded-[20px]">
                About
              </li>
            </Link>
            <Link to="/country">
              <li className="cursor-pointer hover:text-black duration-150 hover:bg-white px-6 py-1 rounded-[20px]">
                Country
              </li>
            </Link>
            <Link to="/contact">
              <li className="cursor-pointer hover:text-black duration-150 hover:bg-white px-6 py-1 rounded-[20px]">
                Contact
              </li>
            </Link>
          </ul>
          <IoMdMenu
            className={`text-[50px] md:hidden cursor-pointer duration-1000`}
            onClick={toggleMenu}
          />
        </div>
      </header>
      <Sidebar show={show} toggleMenu={toggleMenu} />
    </>
  );
};

export default Header;
