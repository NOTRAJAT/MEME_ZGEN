import React from "react";

function PopulateListItems({ props }) {
  const list = props.list;

  const complieListItems = list.map((item) => (
    <li className="before:content-[''] before:w-2 before:h-2 before:bg-[#61DBFB] flex items-center gap-x-3 before:rounded-full text-[17px] my-6">
      {item}
    </li>
  ));

  return complieListItems;
}

const Main = () => {
  const list = [
    "React is Front end framwork",
    "developed by facebool",
    "One of the most popular library used to date in javascript",
    "Has well over 100K stars on GitHub",
    "Powers thousands of enterprise apps, including mobile apps",
  ];
  return (
    <main className="min-h-[100vh] bg-gray-800 flex items-center flex-col  text-white">
      <div className="text-left w-full flex justify-center relative">
        <div className=" w-fit  ">
          <span className="mt-8 text-[41px] relative z-10">
            Fun Facts about React
          </span>

          <ul className="mt-8 style list-inside relative z-10">
            {list ? <PopulateListItems props={{ list }} /> : null}
          </ul>
        </div>

        <img
          src="./reactjs-icon.png"
          alt=""
          className="absolute right-0 top-[10%] "
        />
      </div>
    </main>
  );
};

export default Main;
