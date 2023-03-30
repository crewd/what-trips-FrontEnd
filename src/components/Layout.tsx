import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const AppLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="w-full pt-[56px] md:pt-[64px]">
        <div className="max-w-5xl p-4 m-auto">
          <Outlet />
        </div>
      </main>
    </>
  );
};
