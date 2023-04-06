import React from "react";
import { ModalFrame } from "./ModalFrame";

export const ModalTripInsert = ({
  setModalOpen,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <ModalFrame title="여행추가">
      <div className="pt-5">
        <label className="block" htmlFor="title">
          여행 제목
        </label>
        <input
          className="w-full p-2 border focus:outline-none"
          type="text"
          id="title"
          placeholder="10자이내 입력"
          maxLength={10}
        />
      </div>
      <div className="pt-3">
        <label className="block" htmlFor="date">
          여행 날짜
        </label>
        <input
          className="h-10 px-[0.56rem] border"
          type="date"
          id="start-date"
        />
        <span className="m-2">~</span>
        <input className="h-10 px-[0.56rem] border" type="date" id="end-date" />
      </div>
      <div className="pt-8">
        <button
          className="w-[calc(50%-0.25rem)] py-2 mr-1 border rounded-md border-primary shadow-md"
          onClick={() => setModalOpen(false)}
          type="button"
        >
          취소
        </button>
        <button
          className="w-[calc(50%-0.25rem)] py-2 ml-1 rounded-md bg-primary text-white shadow-md"
          type="submit"
        >
          추가
        </button>
      </div>
    </ModalFrame>
  );
};
