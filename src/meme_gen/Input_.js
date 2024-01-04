import React from "react";

const Input_ = (props) => {
  const CSS =
    "w-full h-[35px] border-2 border-gray-500 rounded ps-2 flex items-center";

  return (
    <input
      type="text"
      placeholder={props.placeHolderText}
      className={CSS + " " + props.ExtendedCss}
      id={props.id}
      onChange={props.onChangeFunction}
    />
  );
};

export default Input_;
