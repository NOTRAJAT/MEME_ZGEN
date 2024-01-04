import React from "react";
import Cards from "./Cards.js";

const Cardsbar = () => {
  const desc = [
    "Group Mountain Bikings",
    "Learn wedding photography",
    "Life lessons with Katie Zaferes",
  ];
  return (
    <div className="h-[400px] mt-8 flex overflow-x-scroll gap-x-7 hide-scroll ps-3 ">
      <Cards
        image="card_1.jpg"
        desc={desc[0].substring(0, 30) + "..."}
        price="25"
        status="1"
      />
      <Cards
        image="card_2.jpg"
        desc={desc[2].substring(0, 30) + "..."}
        price="25"
        status="0"
      />
      <Cards
        image="card_2.jpg"
        desc={desc[2].substring(0, 30) + "..."}
        price="25"
        status="2"
      />
      <Cards
        image="card_1.jpg"
        desc={desc[2].substring(0, 30) + "..."}
        price="25"
        status="0"
      />
    </div>
  );
};

export default Cardsbar;
