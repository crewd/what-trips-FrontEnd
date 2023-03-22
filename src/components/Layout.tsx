import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const AppLayout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-[72px]">
        <Outlet />
      </main>
    </>
  );
};
