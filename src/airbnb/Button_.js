import React from "react";

const Button = () => {
  return (
    <button
      class="w-16 h-7 border-[0.125rem] bg-red-500 rounded-3xl before:content-[''] before:w-[1.375rem] before:h-[1.375rem] before:border-2 before:mx-[0.063rem] before:border-gray-400 flex justify-between items-center before:rounded-full before:shadow-page before:bg-white after:content-['l'] after:text-gray-300 after:mx-auto after:text-1xl tranition_default_css scale-[150%]"
      id="btn"
      onclick="on_off()"
    ></button>
  );
};

export default Button;
