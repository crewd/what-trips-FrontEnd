import React from "react";
import { MdAccountCircle, MdNavigateBefore } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  return (
    <header className="fixed w-full bg-white shadow-md">
      <div className="flex justify-between max-w-5xl p-4 m-auto">
        {pathname === "/" ? (
          <div className="invisible w-6 md:hidden" />
        ) : (
          <button className="md:hidden" type="button" onClick={() => nav(-1)}>
            <MdNavigateBefore className="w-6 h-6" />
          </button>
        )}
        <h2 className="text-base font-medium md:text-2xl">
          <Link to="/">어떤여행</Link>
        </h2>
        <MdAccountCircle className="w-6 h-6 md:w-8 md:h-8" />
      </div>
    </header>
  );
};
