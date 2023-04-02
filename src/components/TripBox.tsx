import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const TripBox = () => {
  const nav = useNavigate();
  return (
    <div className="relative">
      <div
        className="flex w-full mt-4 rounded-md shadow-md cursor-pointer"
        onClick={() => nav("/trip/1")}
      >
        <div className="w-2 rounded-l-md bg-primary" />
        <div className="flex items-center justify-between w-full px-4 py-2">
          <div className="flex flex-col">
            <h3 className="text-base">제주도 여행 일정</h3>
            <span className="text-[10px] font-[Roboto]">
              2023.02.15 ~ 2023.02.20
            </span>
          </div>
        </div>
      </div>
      <button
        className="absolute translate-y-[-50%] transition-transform right-4 top-1/2 hover:scale-125"
        type="button"
        onClick={() => console.log("delete")}
      >
        <MdDeleteForever className="w-6 h-6 fill-[#e91919]" />
      </button>
    </div>
  );
};
