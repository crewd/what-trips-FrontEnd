import React from "react";

function AppLayout({ children }: { children: React.ReactNode }) {
  return <div className="bg-white">{children}</div>;
}

export default AppLayout;
