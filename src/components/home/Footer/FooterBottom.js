import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import Afri from "./Afripace.png"

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#F5F5F3] group">
      <div className="max-w-container mx-auto border-t-[1px] pt-10 pb-19">
        <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          Copyright 2024 | Afripace International | All Rights Reserved |
          {/* <a href="https://reactbd.com/" target="_blank" rel="noreferrer">
            <span className="ml-1 font-medium group-hover:text-primeColor">
              Powered by ReactBD.com
            </span>
          </a> */}
        </p>
      </div>
      <div className="max-w-container flex md:items-center justify-center h-14 w-14 mx-auto border-t-[1px] pt-5 pb-10">
        <img src={Afri} alt="afri"/>
      </div>
    </div>
  );
};

export default FooterBottom;
