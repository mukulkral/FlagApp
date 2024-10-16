import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <main>
        <div className="flex flex-col-reverse justify-center items-center gap-5 md:flex-row md:justify-between md:items-center h-full w-full px-[50px]  pt-[100px] md:pt-[200px] lg:pt-[200px] lg:px-[100px] xl:px-[200px]">
          <div className="w-full md:w-1/2  flex flex-col justify-center md:justify-start md:items-start gap-5 ">
            <h2 className=" text-[30px] md:text-[30px] lg:text-[40px] xl:text-[50px]">
              Explore the World, One Country at a Time.
            </h2>
            <p className="">
              Discover the history, culture and beauty of every nation.Sort,
              search and filter through countries to find the details you need.
            </p>
            <div className="">
              <button className="px-4 py-2 rounded-md border-2  flex justify-center items-center gap-5">
                start Exploring <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="w-[500px] md:3/2 flex justify-center items-center">
            <img
              src="/images/heroImage.webp"
              alt="hero image"
              className="w-full h-full"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
