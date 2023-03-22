import React from "react";
import { useSetRecoilState } from "recoil";
import { loginState } from "recoils";

const Home: React.FC = () => {
  const setToken = useSetRecoilState<string>(loginState);
  const logout = async () => {
    await setTimeout(() => {
      alert("로그아웃 되었습니다.");
      setToken("");
    }, 1000);
  };

  return (
    <div>
      <h1>로그인됨</h1>
      <button className="bg-red-400" onClick={logout} type="button">
        das
      </button>
    </div>
  );
};

export default Home;
