import { ModalTripInsert, TripBox } from "components";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import { useSetRecoilState } from "recoil";
// import { loginState } from "recoils";

const Home: React.FC = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const menuArr = [
    {
      name: "여행일정",
      contents: (
        <>
          <TripBox />
          <button
            className="fixed block w-12 h-12 text-3xl text-white rounded-full md:text-2xl md:mt-12 bottom-8 right-4 md:text-black bg-primary md:bg-transparent md:w-8 md:h-8 md:mx-auto md:static"
            onClick={() => setModalOpen(true)}
            type="button"
          >
            +
          </button>
          {modalOpen && <ModalTripInsert setModalOpen={setModalOpen} />}
        </>
      ),
    },
    { name: "캘린더", contents: "탭메뉴2" },
  ];
  // const setToken = useSetRecoilState<string>(loginState);
  // const logout = async () => {
  //   await setTimeout(() => {
  //     alert("로그아웃 되었습니다.");
  //     setToken("");
  //   }, 1000);
  // };

  return (
    <>
      <ul className="flex mt-2 md:ml-4">
        {menuArr.map((tab, index) => (
          <li
            key={uuidv4()}
            className={`flex flex-col items-center w-20 font-medium cursor-pointer md:text-lg ${
              index === activeTabIndex
                ? "text-[#333333] after:block after:w-full after:h-1 after:mt-2 after:bg-primary after:rounded-sm"
                : "text-[#a0a0a0]"
            }`}
            onClick={() => setActiveTabIndex(index)}
          >
            {tab.name}
          </li>
        ))}
      </ul>
      {menuArr[activeTabIndex].contents}
    </>
  );
};

export default Home;
