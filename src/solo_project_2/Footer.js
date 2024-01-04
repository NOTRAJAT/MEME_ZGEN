import React from "react";

const Footer = () => {
  return (
    <div className="h-16 dark:bg-[#161619] bg-[#D5D4D8] mt-12 shadow rounded-b-lg flex items-center justify-center gap-x-10">
      <a
        href=""
        className="w-[25px] h-[25px] bg-[url('./images/Twitter.svg')] scale-125"
      ></a>
      <a
        href=""
        className="w-[25px] h-[25px] bg-[url('./images/facebook_1.svg')] scale-125 "
      ></a>
      <a
        href=""
        className="w-[25px] h-[25px] bg-[url('./images/Instagram.svg')] scale-125"
      ></a>
      <a
        href=""
        className="w-[25px] h-[25px] bg-[url('./images/GitHub.svg')] scale-125"
      ></a>
    </div>
  );
};

export default Footer;
