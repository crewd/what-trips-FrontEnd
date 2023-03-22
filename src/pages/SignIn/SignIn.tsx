import axios from "axios";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { loginState } from "recoils";

const SignIn: React.FC = () => {
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const BASE_URL = `/user/login`;
  const nav = useNavigate();
  const setLogin = useSetRecoilState(loginState);

  const login = async (email: string, password: string) => {
    await axios({
      method: "post",
      url: BASE_URL,
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        setLogin(res.data.token);
        nav("/", { replace: true });
      })
      .catch(() => {
        alert("아이디 또는 패스워드가 일치하지 않습니다.");
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputEmailRef.current?.value && inputPasswordRef.current?.value) {
      login(inputEmailRef.current.value, inputPasswordRef.current.value);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-full md:w-[736px] flex md:border rounded-xl overflow-hidden md:shadow-xl">
        <div className="hidden bg-primary w-full px-[16px] md:flex justify-center items-center flex-col text-center text-white">
          <h1 className="font-bold text-white">어떤여행</h1>
          <p className="pt-[48px] pb-[10px]">
            우리는 목적지에 닿아야 행복해지는 것이 아니라 여행하는 과정에서
            행복을 느낀다.
          </p>
          <p> - 앤드류 매튜스-</p>
        </div>
        <div className="text-center w-full py-[90px] md:py-[80px] px-[16px]">
          <form onSubmit={handleSubmit}>
            <h1 className="font-bold text-[36px] md:text-[32px] md:text-primary md:hidden">
              어떤여행
            </h1>
            <h2 className="hidden font-medium md:block">로그인</h2>
            <div className="pt-[48px]">
              <input
                ref={inputEmailRef}
                type="text"
                className="bg-[#F1F0F5] w-full px-[16px] pt-[12px] pb-[14px] mb-[16px] rounded-md outline-0"
                placeholder="이메일을 입력해 주세요"
              />
              <input
                ref={inputPasswordRef}
                type="password"
                className="bg-[#F1F0F5] w-full px-[16px] pt-[12px] pb-[14px] rounded-md outline-0"
                placeholder="비밀번호를 입력해 주세요"
              />
            </div>
            <div className="pt-[12px]">
              <p className="text-xs text-end">
                <Link to="#">아이디 찾기</Link>
                {" | "}
                <Link to="#">비밀번호 찾기</Link>
              </p>
            </div>
            <div className="pt-[24px]">
              <button
                className="bg-primary text-white w-full py-[15px] rounded-md mb-[16px] font-semibold"
                type="submit"
              >
                로그인
              </button>
              <button
                className="bg-[#FAE500] text-[#3B1E1E] w-full py-[15px] rounded-md font-semibold"
                type="button"
              >
                (아이콘) 카카오
              </button>
            </div>
            <div className="pt-[48px]">
              <p>
                아직 회원이 아니신가요?
                <Link className="font-bold pl-[5px]" to="/signup" replace>
                  회원가입 {`>`}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
