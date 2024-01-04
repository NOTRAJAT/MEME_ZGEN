import React from "react";

const Nav = () => {
  return (
    <div className="">
      <nav className="bg-gray-900  h-24 flex items-center px-6 justify-between">
        <div className="flex items-center gap-x-1">
          <img
            src=".\logo192.png"
            alt=""
            className="w-[28px] h-[28px] inline"
          />
          <span className="text-[22px] text-[#61DBFB]">ReactFacts</span>
        </div>
        <h3 className="text-[#DEEBF8] font-semibold">
          React Course - Project 1
        </h3>
      </nav>
    </div>
  );
};

export default Nav;
