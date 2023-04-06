import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";

export const AppLayout: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <main className="w-full pt-[56px] md:pt-[64px]">
        {pathname.slice(-4) !== "/map" ? (
          <div className="max-w-5xl p-4 m-auto">
            <Outlet />
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </>
  );
};
