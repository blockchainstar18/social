import { store } from "../Store";
import copy from "../assets/copy.png";
import avatar from "../assets/avatar.png";
import { useEffect } from "react";
import back from "../assets/back.png";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [header, setHeader] = store.useState("Header");

  return (
    <div
      className="h-[70px] border-b-[2px] border-[
      #EBEBFF] text-[#00106D] font-bold p-[10px] justify-end flex items-center relative"
    >
      <div className="absolute left-[20px] text-[20px] flex items-center">
        {header == "Choose Product Type" ? (
          <img
            src={back}
            className="mr-1 cursor-pointer"
            onClick={() => {
              setHeader("My Store");
            }}
          ></img>
        ) : (
          <></>
        )}
        {header}
      </div>
      <NavLink to="/link">
        <div className="mx-2 text-[#B947F2]">hypeit.store/bk1</div>
      </NavLink>
      <div className="mx-2 border-[1px] border-[#B947F2] w-max h-min text-[#B947F2] p-[5px] flex rounded-[10px] cursor-pointer items-center">
        <img src={copy}></img>
        <div className="pl-[5px]">Copy</div>
      </div>
      <img className="mx-2 rounded-[25px]" src={avatar} width={50}></img>
      <div>John's Store</div>
    </div>
  );
};
