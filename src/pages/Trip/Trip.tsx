import { ModalSearchPlace } from "components";
import React, { useRef, useState } from "react";
import {
  MdCancel,
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdCheckCircle,
  MdDeleteForever,
  MdEdit,
  MdExpandLess,
  MdExpandMore,
  MdLocationOn,
  MdMap,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Trip = () => {
  const nav = useNavigate();
  const [accordion, setAccordion] = useState<boolean>(false);
  const [showAddPlanForm, setShowAddPlanForm] = useState<boolean>(false);
  const [showInput, setShowInput] = useState<boolean>(false);
  const [tripName, setTripName] = useState<string>("제주도 여행 일정");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const editTripName = () => {
    if (!inputRef.current) return;
    if (!inputRef.current?.value.trim()) {
      setShowInput(false);
      return;
    }
    setTripName(inputRef.current?.value.replace(/^\s+|\s*$/g, ""));
    setShowInput(false);
  };

  return (
    <>
      <div className="flex items-center justify-between pt-5">
        <div>
          <div className="flex items-center">
            <div className="w-1 h-8 mr-2 bg-primary" />
            {!showInput ? (
              <>
                <h2 className="font-medium">{tripName}</h2>
                <div className="ml-2" onClick={() => setShowInput(true)}>
                  <MdEdit className="w-4 h-4" />
                </div>
              </>
            ) : (
              <>
                <input
                  className="p-1 text-base focus:outline-none"
                  type="text"
                  ref={inputRef}
                  placeholder="10자이내 입력"
                  maxLength={10}
                />
                <button
                  className="ml-2"
                  type="button"
                  onClick={() => editTripName()}
                >
                  <MdCheckCircle className="w-5 h-5 fill-primary" />
                </button>
                <button
                  className="ml-2"
                  type="button"
                  onClick={() => setShowInput(false)}
                >
                  <MdCancel className="w-5 h-5 fill-[#e91919]" />
                </button>
              </>
            )}
          </div>
          <span className="pt-1 text-xs">2023.02.15 ~ 2023.02.20</span>
        </div>
        <button type="button" onClick={() => nav("./map")}>
          <MdMap className="w-6 h-6" />
        </button>
      </div>

      <div className=" mt-7">
        <div
          className={`flex items-center justify-between px-4 cursor-pointer shadow-md h-[60px] mt-4 first:mt-0 ${
            accordion ? "rounded-t-md" : "rounded-md"
          }`}
          onClick={() => setAccordion(!accordion)}
        >
          <div className={`${accordion ? "flex items-center" : ""}`}>
            <h3 className="text-base">1일차</h3>
            <span className={`text-xs ${accordion ? "ml-3" : ""}`}>
              2023.02.15
            </span>
          </div>
          {accordion ? <MdExpandLess size={24} /> : <MdExpandMore size={24} />}
        </div>
        {accordion && (
          <div className="p-6 shadow-md rounded-b-md">
            <div className="flex items-center justify-between w-full">
              <div className="truncate">
                <label className="flex">
                  <input
                    className="hidden peer"
                    type="checkbox"
                    name="plan-item"
                  />
                  <MdCheckBoxOutlineBlank
                    className="peer-checked:hidden shrink-0"
                    size={20}
                  />
                  <MdCheckBox
                    className="hidden fill-primary peer-checked:block shrink-0"
                    size={20}
                  />
                  <span className="ml-5 cursor-pointer peer-checked:line-through peer-checked:text-[#a0a0a0]">
                    09:00
                  </span>
                  <span className="ml-5 cursor-pointer truncate peer-checked:line-through peer-checked:text-[#a0a0a0]">
                    김포공항 도착
                  </span>
                </label>
              </div>
              <button
                className="transition-transform hover:scale-125"
                type="button"
                onClick={() => console.log("delete")}
              >
                <MdDeleteForever className="w-6 h-6 fill-[#e91919]" />
              </button>
            </div>
            {showAddPlanForm ? (
              <>
                <form className="p-6 mt-6 border-t-2">
                  <input
                    className="block w-full max-w-lg p-2 mx-auto border-b focus:outline-none"
                    type="time"
                    placeholder="시간"
                  />
                  <div className="flex items-center max-w-lg pt-4 mx-auto">
                    <input
                      className="block w-full p-2 border-b focus:outline-none"
                      type="text"
                      placeholder="내용"
                    />
                    <button
                      className="mx-2"
                      type="button"
                      onClick={() => setModalOpen(true)}
                    >
                      <MdLocationOn className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="max-w-lg pt-4 mx-auto">
                    <button
                      className="w-[calc(50%-0.25rem)] py-2 mr-1 rounded-md border border-primary shadow-md"
                      type="button"
                      onClick={() => setShowAddPlanForm(false)}
                    >
                      취소
                    </button>
                    <button
                      className="w-[calc(50%-0.25rem)] py-2 ml-1 rounded-md border bg-primary text-white shadow-md"
                      type="button"
                    >
                      추가
                    </button>
                  </div>
                </form>
                {modalOpen && <ModalSearchPlace setModalOpen={setModalOpen} />}
              </>
            ) : (
              <button
                className="block w-6 h-6 mx-auto mt-8 text-[24px]"
                type="button"
                onClick={() => setShowAddPlanForm(true)}
              >
                +
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Trip;
