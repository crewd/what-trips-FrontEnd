import React from "react";
import { useSetRecoilState } from "recoil";
import { loginState } from "recoils";

const Home: React.FC = () => {
  const setIsLoggedIn = useSetRecoilState(loginState);
  const logout = async () => {
    await setTimeout(() => {
      alert("로그아웃 되었습니다.");
      setIsLoggedIn(false);
    }, 1000);
  };
  return (
    <div>
      <h1>로그인됨</h1>
      <button onClick={logout} type="button">
        das
      </button>
    </div>
  );
};

export default Home;
