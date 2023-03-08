import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type Inputs = {
  email: string;
  name: string;
  password: string;
  passwordRe: string;
};

const SignUp = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("이메일을 입력해주세요.")
      .matches(/^[^@\s]+@[^@\s]+\.[^@\s]*$/, "올바른 이메일 형식이 아닙니다."),
    name: yup
      .string()
      .required("이름을 입력해주세요.")
      .matches(/^[가-힣]*$/, "올바른 형식이 아닙니다."),
    password: yup
      .string()
      .required("비밀번호를 입력해주세요.")
      .min(8, "비밀번호는 8자 ~ 15자입니다.")
      .max(15, "비밀번호는 8자 ~ 15자입니다.")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]*$/,
        "알파벳, 숫자, 공백을 제외한 특수문자를 모두 포함해야 합니다."
      ),
    passwordRe: yup
      .string()
      .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema), mode: "onChange" });

  const onSubmit: SubmitHandler<Inputs> = (values) => {
    alert(JSON.stringify(values));
  };

  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        <form
          className="md:border rounded-xl p-4 md:p-16 w-full md:w-[736px] md:shadow-xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="font-medium text-left md:text-center">회원가입</h2>
          <div className="pt-[24px] md:pt-[42px]">
            <label className="inline-block mb-[16px]">이메일</label>
            <input
              type="email"
              className="bg-[#F1F0F5] w-full px-[16px] pt-[12px] pb-[14px] mb-[16px] rounded-md outline-0"
              placeholder="이메일을 입력해 주세요."
              {...register("email")}
            />
            {errors.email && (
              <span className="block mb-5">{errors.email.message}</span>
            )}
            <label className="inline-block mb-[16px]">이름</label>
            <input
              type="text"
              className="bg-[#F1F0F5] w-full px-[16px] pt-[12px] pb-[14px] mb-[16px] rounded-md outline-0"
              placeholder="이름을 입력해 주세요."
              {...register("name")}
            />
            {errors.name && (
              <span className="block mb-5">{errors.name.message}</span>
            )}
            <label className="inline-block mb-[16px]">비밀번호</label>
            <input
              type="password"
              className="bg-[#F1F0F5] w-full px-[16px] pt-[12px] pb-[14px] mb-[16px] rounded-md outline-0"
              placeholder="비밀번호를 입력해 주세요."
              {...register("password")}
            />
            {errors.password && (
              <span className="block mb-5">{errors.password.message}</span>
            )}
            <label className="inline-block mb-[16px]">비밀번호 확인</label>
            <input
              type="password"
              className="bg-[#F1F0F5] w-full px-[16px] pt-[12px] pb-[14px] rounded-md outline-0"
              placeholder="비밀번호를 다시 입력해 주세요."
              {...register("passwordRe")}
            />
            {errors.passwordRe && (
              <span className="block mb-5">{errors.passwordRe.message}</span>
            )}
          </div>
          <div className="pt-12">
            <button
              className="bg-primary text-white w-full py-[15px] rounded-md font-semibold"
              type="submit"
            >
              회원가입
            </button>
          </div>
          <div className="pt-6">
            <p className="text-center">
              이미 회원이신가요?
              <Link className="font-bold pl-[5px] text-[#333]" to="/login">
                로그인 {`>`}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
