import React from "react";
import { ModalFrame } from "./ModalFrame";

export const ModalSearchPlace = ({
  setModalOpen,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <ModalFrame title="장소검색">
      <div className="pt-5">
        <input className="relative w-full p-2 border" type="text" />
        <button className="absolute w-4 h-4 border" type="button">
          Q
        </button>
      </div>
      <div className="pt-3">
        <ul className="h-40 overflow-y-scroll border">
          <li className="px-4 py-3 cursor-pointer hover:bg-primary hover:text-white">
            result1
          </li>
          <li className="px-4 py-3 cursor-pointer hover:bg-primary hover:text-white">
            result2
          </li>
          <li className="px-4 py-3 cursor-pointer hover:bg-primary hover:text-white">
            result3
          </li>
          <li className="px-4 py-3 cursor-pointer hover:bg-primary hover:text-white">
            result4
          </li>
          <li className="px-4 py-3 cursor-pointer hover:bg-primary hover:text-white">
            result5
          </li>
        </ul>
      </div>
      <button
        className="block w-1/2 py-2 mx-auto mt-5 border rounded-md shadow-md border-primary"
        onClick={() => setModalOpen(false)}
        type="button"
      >
        취소
      </button>
    </ModalFrame>
  );
};
