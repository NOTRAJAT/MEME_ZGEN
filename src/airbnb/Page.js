import React from "react";
import Navbar from "./Navbar.js";
import Canvas from "./Canvas.js";
import Cardsbar from "./Cardsbar.js";
import Button from "./Button_.js";

const Page = () => {
  return (
    <div className=" ">
      <Navbar />
      <Canvas />
      <Cardsbar />
      <div className="flex h-14 items-center justify-evenly">
        {" "}
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
    </div>
  );
};

export default Page;
