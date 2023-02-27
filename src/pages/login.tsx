import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="md:w-[736px] flex md:border rounded-lg overflow-hidden md:shadow-xl">
        <div className="hidden bg-primary w-full px-[16px] md:flex justify-center items-center flex-col text-center text-white">
          <h2 className="font-bold text-[32px]">어떤여행</h2>
          <p className="pt-[50px] pb-[10px]">
            우리는 목적지에 닿아야 행복해지는 것이 아니라 여행하는 과정에서
            행복을 느낀다.
          </p>
          <p> - 앤드류 매튜스-</p>
        </div>
        <div className="text-center w-full py-[90px] md:py-[50px] px-[16px]">
          <h1 className="font-bold text-[36px] md:text-[32px] text-primary md:hidden">
            어떤여행
          </h1>
          <h1 className="font-bold text-[32px] text-primary hidden md:block">
            로그인
          </h1>
          <div className="pt-[48px] md:pt-[42px]">
            <input
              type="text"
              className="bg-[#F1F0F5] w-full px-[8px] py-[12px] mb-[16px] rounded-lg outline-0"
              placeholder="이메일을 입력해 주세요"
            />
            <input
              type="text"
              className="bg-[#F1F0F5] w-full px-[8px] py-[12px] rounded-lg outline-0"
              placeholder="비밀번호를 입력해 주세요"
            />
          </div>
          <div className="pt-[16px]">
            <button className="bg-primary text-white w-full py-[12px] rounded-lg mb-[16px] font-semibold">
              로그인
            </button>
            <button className="bg-[#FAE500] text-[#3B1E1E] w-full py-[12px] rounded-lg font-semibold">
              카카오
            </button>
          </div>
          <div className="pt-[50px]">
            <p>
              아직 회원이 아니신가요?
              <Link className="font-bold pl-[5px]" to="#">
                회원가입
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
