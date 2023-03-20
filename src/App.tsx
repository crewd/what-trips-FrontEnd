import React from "react";
import { RecoilRoot } from "recoil";
import { AppRoutes } from "./routes";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <AppRoutes />
    </RecoilRoot>
  );
};

export default App;
