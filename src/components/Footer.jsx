import React from "react";
import CenterMenu from "./CenterMenu";
import { Facebook, Twitter, YouTube, LinkedIn } from "@material-ui/icons";

function Footer(props) {
  const socialStyle = "rounded-full border-2 border-whit p-2 mr-[5rem]";
  return (
    <div className="footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
      <CenterMenu />
      {/* social icons */}
      <div className="flex w-[100%] justify-center mt-14">
        <div className={socialStyle}>
          <Facebook />
        </div>
        <div className={socialStyle}>
          <Twitter />
        </div>
        <div className={socialStyle}>
          <YouTube />
        </div>
        <div className={socialStyle}>
          <LinkedIn />
        </div>
      </div>
      {/* details */}
      <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </span>
    </div>
  );
}

export default Footer;
