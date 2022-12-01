import React from "react";
import bg1 from "./bg1.jpg";

const HeaderSearch = () => {
  return (
    <div className="rounded-xl relative">
      <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
        <p className="font-bold text-2xl px-2 pt-4">Gereja Induk</p>
        <p className="px-2">Warta Jemaat</p>
        <button className="border-white bg-white text-black mx-2 py-2 px-3 absolute bottom-4">
          <a href="/">Lihat</a>
        </button>
      </div>
      <img
        src={bg1}
        alt="/"
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
      />
    </div>
  );
};

export default HeaderSearch;
