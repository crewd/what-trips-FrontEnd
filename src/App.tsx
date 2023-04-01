import React, { useEffect } from "react";
import { RecoilRoot } from "recoil";
import { AppRoutes } from "./routes";

const App: React.FC = () => {
  useEffect(() => {
    if (
      document.querySelector(
        `script[src="//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_MAP_KEY}&libraries=services,clusterer&autoload=false"]`
      )
    )
      return;
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_MAP_KEY}&libraries=services,clusterer&autoload=false`;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <RecoilRoot>
      <AppRoutes />
    </RecoilRoot>
  );
};

export default App;
