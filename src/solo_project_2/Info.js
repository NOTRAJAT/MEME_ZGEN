import React from "react";

function Info() {
  const Name = "Laura Smith";
  const position = "Front-end Developer";
  const portofolio = ["yahoo.in", "laurasmith.website"];
  const email = "x";
  const linkedin = "y";

  return (
    <div className="flex flex-col items-center   ">
      <img
        src="./images/solo_project_2_images/profile.png"
        alt=""
        className=" w-full aspect-square object-cover object-top  rounded-t-md border-1   "
      />
      <span className="text-nowrap text-3xl font-bold dark:text-white  mt-5">
        {Name}
      </span>
      <span className="text-nowrap text-xs dark:text-[#F3BF99] text-[#F47D27]  ">
        {position}
      </span>
      <span className="text-nowrap text-xs dark:text-[#F5F5F5] text-[#4A4E74]   mt-4">
        <a href={portofolio[0]}>{portofolio[1]}</a>
      </span>
      <div className="h-14 w-full mt-2 flex items-center justify-evenly gap-3 px-8  ">
        {email ? (
          <a
            href={email}
            className="  h-9 bg-white rounded flex items-center justify-center shadow font-black grow-[1]   before:content-[''] before:bg-[url('./images/Mail.svg')] before:w-[17px] before:h-[16px] before:mr-2 before:scale-150 "
          >
            Email
          </a>
        ) : null}
        {linkedin ? (
          <a
            href={linkedin}
            className="  h-9 bg-[#5093E2] text-white rounded flex items-center justify-center shadow font-black grow-[1]  before:content-[''] before:bg-[url('./images/linkedin.svg')] before:w-[14px] before:h-[14px] before:mr-2 before:scale-150"
          >
            LinkedIn
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default Info;
