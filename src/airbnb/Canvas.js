import React from "react";

const Canvas = () => {
  const imgdir = "./images/airbnb_images/";
  return (
    <div className="mt-8 flex flex-col items-center">
      <div className="  w-96 h-60  grid grid-cols-5 grid-rows-1 auto-rows-[none]  px-2">
        <div className=" flex justify-center items-center  ">
          <img
            src={imgdir + "first_1.svg"}
            alt=""
            className="w-[72px] h-auto"
          />
        </div>
        <div className=" flex flex-col justify-start items-center gap-y-2">
          <img
            src={imgdir + "second_1.svg"}
            alt=""
            className="w-[72px] h-auto"
          />
          <img
            src={imgdir + "second_2.svg"}
            alt=""
            className="w-[72px] h-auto"
          />
        </div>
        <div className=" flex flex-col justify-end items-center gap-y-2">
          <img
            src={imgdir + "third_1.svg"}
            alt=""
            className="w-[72px] h-auto"
          />
          <img
            src={imgdir + "third_2.svg"}
            alt=""
            className="w-[72px] h-auto"
          />
        </div>
        <div className=" flex flex-col justify-center items-center gap-y-2">
          <img
            src={imgdir + "fourth_2.svg"}
            alt=""
            className="w-[72px] h-auto"
          />
          <img
            src={imgdir + "fourth_1.svg"}
            alt=""
            className="w-[72px] h-auto"
          />
        </div>
        <div className="flex flex-col justify-end items-center gap-y-2 pb-1">
          <img
            src={imgdir + "fifth_1.svg"}
            alt=""
            className="w-[72px] h-auto"
          />
          <img
            src={imgdir + "fifth_2.svg"}
            alt=""
            className="w-[72px] h-auto"
          />
        </div>
      </div>
      <div className=" mt-8 ms-8 ">
        <span className="text-[30px] font-black text-left text-nowrap">
          Online Experiences
        </span>
        <p className="text-[#222222] me-[20%]">
          Join unique interactive activities led by
          <span className="text-nowrap">one-of-a-kind hosts—all</span> without
          leaving home.
        </p>
      </div>
    </div>
  );
};

export default Canvas;
