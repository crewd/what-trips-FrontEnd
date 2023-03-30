import React from "react";

export const Modal = ({
  setModalOpen,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className="fixed flex
     top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,.35)]"
    >
      <div className="w-auto h-auto px-4 py-8 m-auto bg-white shadow-md rounded-2xl">
        <h3 className="text-xl font-medium text-center">여행추가</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="pt-5">
            <label className="block" htmlFor="title">
              여행 제목
            </label>
            <input
              className="w-full p-2 border"
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
            <input className="p-2 border" type="date" id="start-date" />
            <span className="m-2">~</span>
            <input className="p-2 border" type="date" id="end-date" />
          </div>
          <div className="pt-8">
            <button
              className="box-border w-[calc(50%-0.25rem)] py-2 mr-1 border rounded-md border-primary shadow-md"
              onClick={() => setModalOpen(false)}
              type="button"
            >
              취소
            </button>
            <button
              className="box-border w-[calc(50%-0.25rem)] py-2 ml-1 rounded-md bg-primary text-white shadow-md"
              type="submit"
            >
              추가
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
