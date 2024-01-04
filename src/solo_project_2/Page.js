import React from "react";
import Info from "./Info.js";
import About from "./About.js";
import Interest from "./Interest.js";
import Footer from "./Footer.js";
const Page = () => {
  return (
    <div className="min-h-[100vh] rounded dark:bg-[#1A1B21] w-full mx-auto mb-2 bg-[#F5F5F5]">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  );
};

export default Page;
