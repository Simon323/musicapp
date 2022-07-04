import React from "react";

function Search() {
  return (
    <div className="search relative h-[65rem] px-[5rem] bg-[#081730] pt-[18rem] pb-[10rem] mt-[-15rem] z-[1] flex items-center justify-between rounded-b-[5rem]">
      {/* left side */}
      <div className="left">
        <img
          src={require("../img/backgraphics.png")}
          alt=""
          className="absolute top-[22rem] left-[-47rem]"
        />
        <img
          src={require("../img/d1.png")}
          alt=""
          className="absolute w-[16rem] top-[26rem]"
        />
        <img
          src={require("../img/d2.png")}
          alt=""
          className="absolute w-[9rem] top-[32.7em] left-[7rem]"
        />
        <img
          src={require("../img/d3.png")}
          alt=""
          className="absolute w-[9rem] top-[32rem] left-[17rem]"
        />
        <img
          src={require("../img/d4.png")}
          alt=""
          className="absolute w-[17rem] top-[50rem] left-[2rem]"
        />
      </div>

      {/* right side */}
      <div className="right"></div>
    </div>
  );
}

export default Search;
