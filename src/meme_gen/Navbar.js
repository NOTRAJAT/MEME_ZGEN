import React from "react";

const Navbar = () => {
  return (
    <div className=" h-16 bg-gradient-to-r from-[#672280] to-[#A626D3] text-white flex items-center justify-between px-4 sm:px-3">
      <div className="flex items-center">
        <img
          src=".\images\meme_gen_images\troll.svg"
          alt=""
          className="w-[32px] h-[72px] scale-150 "
        />
        <h2 className=" ml-4 sm:text-lg  text-2xl">MemeGenerator</h2>
      </div>

      <h4 className="sm:text-xs  text-lg text-wrap text-right">
        <span className="text-nowrap">React Course</span>- Project 3
      </h4>
    </div>
  );
};

export default Navbar;
