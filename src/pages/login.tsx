import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="px-[16px] w-full h-screen max-h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="font-bold text-[36px]">어떤여행</h1>
        <div className="pt-[50px]">
          <input
            type="text"
            className="bg-[#F1F0F5] w-full p-[16px] mb-[16px] rounded-lg outline-0"
            placeholder="이메일을 입력해 주세요"
          />
          <input
            type="text"
            className="bg-[#F1F0F5] w-full p-[16px] rounded-lg outline-0"
            placeholder="비밀번호를 입력해 주세요"
          />
        </div>
        <div className="pt-[16px]">
          <button className="bg-primary text-white w-full py-[16px] rounded-lg mb-[16px] font-semibold">
            로그인
          </button>
          <button className="bg-[#FAE500] text-[#3B1E1E] w-full py-[16px] rounded-lg font-semibold">
            카카오
          </button>
        </div>
        <div className="pt-[50px]">
          <p>
            아직 회원이 아니신가요?
            <Link className="font-bold" to="#">
              회원가입
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
