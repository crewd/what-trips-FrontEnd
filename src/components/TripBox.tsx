import React from "react";
import { useNavigate } from "react-router-dom";

export const TripBox = () => {
  const nav = useNavigate();
  return (
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
        <div className="flex items-center justify-center w-5 h-5 border cursor-pointer">
          X
        </div>
      </div>
    </div>
  );
};
