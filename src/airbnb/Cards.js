import React from "react";
function randoRatings() {
  var precision = 100; // 2 decimals
  var randomnum =
    Math.floor(
      Math.random() * (5 * precision - 1 * precision) + 1 * precision
    ) /
    (1 * precision);

  return randomnum;
}
function randoReviews() {
  var randomnum = Math.floor(Math.random() * (100 - 5) + 5);

  return randomnum;
}
const Cards = (props) => {
  const imgdir = "./images/airbnb_images/";
  const Avail = ["SOLD OUT", "NEW", "ONLINE"];

  console.log(props);
  return (
    <div
      className=" relative shrink-0  w-[150px] before:w-fit h-[11px]   before:content-[attr(status)] before:absolute before:rounded-md shadow-xl before:top-2 before:left-2  before:font-thin before:text-sm before:px-2 before:shadow-inner before:bg-white"
      status={Avail[parseInt(props.status) % 3]}
    >
      {/* -card--img-- */}
      <img
        src={imgdir + props.image}
        alt=""
        className="aspect-[2/3] w-[150px] rounded-3xl "
      />

      {/* card-info-rating */}
      <div className="w-full relative before:bg-[url('./images/Star.svg')] before:w-[12px] before:h-[11px]   before:scale-125 text-sm mt-1 flex justify-center items-center text-center gap-x-1 ">
        <span>
          {randoRatings()}{" "}
          <span className=" text-[#918E9B]">({randoReviews()}) USA</span>
        </span>
      </div>
      {/* card- description */}
      <div className="text-center text-[#222222] mt-1">{props.desc}</div>
      {/* card-price */}
      <div className="text-center text-nowrap text-sm mt-1">
        <span className="font-black">From ${props.price}</span> / person
      </div>

      {/* --Card--end */}
    </div>
  );
};

export default Cards;
