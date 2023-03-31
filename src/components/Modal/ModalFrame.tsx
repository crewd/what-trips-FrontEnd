import React from "react";

export const ModalFrame = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div
      className="fixed flex
     top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,.35)]"
    >
      <div className="w-[320px] h-auto px-4 py-8 m-auto bg-white shadow-md rounded-2xl">
        <h3 className="text-xl font-medium text-center">{title}</h3>
        <form onSubmit={(e) => e.preventDefault()}>{children}</form>
      </div>
    </div>
  );
};
