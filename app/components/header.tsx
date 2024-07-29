import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="flex justify-between items-center max-w-full px-4 py-2">
        <div className="text-xl font-bold flex flex-row space-x-1 items-center justify-center">
          <h1>Inso</h1>
          <div className="flex flex-row">
            <Image src={"/dot.svg"} width={14} height={14} alt="dot"></Image>
            <Image src={"/dot.svg"} width={14} height={14} alt="dot"></Image>
          </div>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="hidden sm:block bg-gray-100 p-2 rounded-md"
        />
        <div className="space-x-4">
          <button className="p-2">Home</button>
          <button className="p-2">Profile</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
