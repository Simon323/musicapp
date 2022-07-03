import React from "react";
import DownloadAds from "./DownloadAds";

function Hero(props) {
  return (
    <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative">
      {/* left side */}
      <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
        <span>Experience The</span>
        <span>
          <b>Best Quality Music</b>
        </span>
        <span className="text-[15px] text-[#525D6E]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br />
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s
        </span>
        {/* download ads */}
        <div>
          <span className="text-[13px]">Download now in IOS and Android</span>
          <DownloadAds />
        </div>
      </div>
      {/* right side */}
      <div className="images">Images</div>
    </div>
  );
}

export default Hero;
