import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className="fixed flex items-center justify-between w-full p-4 bg-white shadow-md">
      <div className="flex justify-center items-center w-[24px] h-[24px] border md:hidden">
        X
      </div>
      <h2 className="text-base font-medium md:text-2xl">
        <Link to="/">어떤여행</Link>
      </h2>
      <div className="flex justify-center items-center w-[24px] h-[24px] md:w-[32px] md:h-[32px] border">
        X
      </div>
    </header>
  );
};
