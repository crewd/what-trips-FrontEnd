import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { InputProps } from "./types";

const SignUp: React.FC = () => {
  const navigate: NavigateFunction = useNavigate();
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
  } = useForm<InputProps>({ resolver: yupResolver(schema), mode: "onChange" });

  const onSubmit: SubmitHandler<InputProps> = async (values) => {
    alert(JSON.stringify(values));
    await setTimeout(() => {
      navigate("/login", { replace: true });
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <form
        className="md:border rounded-xl p-4 md:px-[72px] md:py-[56px] w-full md:w-[736px] md:shadow-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="font-medium text-left md:text-center">회원가입</h2>
        <div className="pt-[24px] md:pt-[42px]">
          <div>
            <label className="inline-block mb-[16px]" htmlFor="input-email">
              이메일
            </label>
            <input
              id="input-email"
              type="email"
              className="bg-[#F1F0F5] w-full px-[16px] pt-[12px] pb-[14px] rounded-md outline-0"
              placeholder="이메일을 입력해 주세요."
              {...register("email")}
            />
            {errors.email && (
              <span className="block mt-[8px] text-xs text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="pt-[16px]">
            <label className="inline-block mb-[16px]" htmlFor="input-name">
              이름
            </label>
            <input
              id="input-name"
              type="text"
              className="bg-[#F1F0F5] w-full px-[16px] pt-[12px] pb-[14px] rounded-md outline-0"
              placeholder="이름을 입력해 주세요."
              {...register("name")}
            />
            {errors.name && (
              <span className="block mt-[8px] text-xs text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="pt-[16px]">
            <label className="inline-block mb-[16px]" htmlFor="input-password">
              비밀번호
            </label>
            <input
              id="input-password"
              type="password"
              className="bg-[#F1F0F5] w-full px-[16px] pt-[12px] pb-[14px] rounded-md outline-0"
              placeholder="비밀번호를 입력해 주세요."
              {...register("password")}
            />
            {errors.password && (
              <span className="block mt-[8px] text-xs text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="pt-[16px]">
            <label
              className="inline-block mb-[16px]"
              htmlFor="input-passwordRe"
            >
              비밀번호 확인
            </label>
            <input
              id="input-passwordRe"
              type="password"
              className="bg-[#F1F0F5] w-full px-[16px] pt-[12px] pb-[14px] rounded-md outline-0"
              placeholder="비밀번호를 다시 입력해 주세요."
              {...register("passwordRe")}
            />
            {errors.passwordRe && (
              <span className="block mt-[8px] text-xs text-red-500">
                {errors.passwordRe.message}
              </span>
            )}
          </div>
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
            <Link
              className="font-bold pl-[5px] text-[#333]"
              to="/signin"
              replace
            >
              로그인 {`>`}
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
