import React, { useState } from "react";
import Input_ from "./Input_";

const Main_ = () => {
  const [Url, SetUrl] = useState("./images/meme_gen_images/memeimg.jpg");
  const [UpText, SetUpText] = useState("SHUT UP");
  const [BottomText, SetBottomText] = useState("AND TAKE MY MONEY");
  const [Render, SetRender] = useState(false);
  return (
    <div className="mt-4 mx-auto w-11/12 flex flex-col items-center gap-y-5">
      {Render && (
        <>
          <div
            className="  bg-white h-14 w-full    
      "
          >
            <div className="text-black flex   gap-x-4 px-4">
              <span className="w-full font-medium">Top text</span>
              <span className="w-full font-medium">Bottom text</span>
            </div>
            <div className="text-black flex gap-x-4 px-4">
              <Input_
                placeHolderText={UpText}
                id="UpInput"
                onChangeFunction={() => {
                  SetUpText(document.getElementById("UpInput").value);
                }}
              />
              <Input_
                placeHolderText={BottomText}
                id="bottomInput"
                onChangeFunction={() => {
                  SetBottomText(document.getElementById("bottomInput").value);
                }}
              />
            </div>
          </div>

          <button
            type="button"
            className="w-full h-[40px] rounded bg-gradient-to-r from-[#672280] to-[#A626D3] text-white text-center outline-red-900 font-medium"
            onClick={() => SetRender(!Render)}
          >
            Get a New meme image
          </button>
        </>
      )}

      {!Render && (
        <>
          <Input_
            placeHolderText="Image Url"
            id="tag"
            ExtendedCss="text-center"
          />
          <button
            type="button"
            className="w-full h-[40px] rounded bg-gradient-to-r from-[#672280] to-[#A626D3] text-white text-center outline-red-900 font-medium"
            onClick={() => {
              const input = document.getElementById("tag");
              SetUrl(input.value);
            }}
          >
            Set
          </button>
        </>
      )}
      <div
        className="relative inline w-10/12
        "
      >
        <span className="absolute top-5 w-full text-center text-white font-extrabold text-4xl   drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          {UpText}
        </span>

        <span className="absolute bottom-3 w-full text-center text-white   font-extrabold text-3xl  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          {BottomText}
        </span>

        <img
          src={Url}
          alt="404"
          className=" w-full aspect-video object-fill "
          onError={(e) => {
            e.onerror = null;
            SetUrl(
              "https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png"
            );

            SetBottomText("");
            SetUpText("");
          }}
          onLoad={() => {
            if (
              Url !=
              "https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png"
            )
              SetRender(!Render);
          }}
        />
      </div>
    </div>
  );
};

export default Main_;
