import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./logogkj.png";
import NavMobile from "./NavMobile";
import { FaBars } from "react-icons/fa";
import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineSchedule,
  AiOutlineProfile,
  AiOutlineBook,
  AiOutlineHeart,
} from "react-icons/ai";
import { FiActivity } from "react-icons/fi";
import { HiOutlinePhotograph } from "react-icons/hi";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  const activeLink = "font-bold";
  const normalLink = "";

  const [nav, setNav] = useState(false);

  return (
    <header
      className={`${
        bg ? "bg-slate-800 h-16 text-white" : "h-21 text-black"
      }  sticky top-0 z-50 shadow-lg shadow-black/70 transition-all duration-300`}
    >
      {/* <header className=" text-black bg-[#3D5459] sticky top-0 z-50 shadow-lg shadow-black/70"> */}
      <div className="container mx-auto h-full flex items-center justify-between">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <FaBars size={25} className={`${bg ? "" : "text-white"}text-black`} />
        </div>
        <div
          className={`${
            bg ? "" : ""
          } flex space-x-8 capitalize text-[21px] font-serif`}
        >
          {/* <div className="flex space-x-8 capitalize text-[21px] text-white font-serif"> */}
          <NavLink
            exact
            to="/"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/profile"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Profil
          </NavLink>
          <NavLink
            to="/jadwalibadah"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Jadwal Ibadah
          </NavLink>
          <NavLink
            to="/wartajemaat"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Warta Jemaat
          </NavLink>
          <NavLink
            to="/kegiatan"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Kegiatan
          </NavLink>
          <NavLink
            to="/renungan"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Renungan
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Gallery
          </NavLink>
        </div>
        <div>
          {" "}
          <NavLink to="/">
            <img src={Logo} width="80" alt="" />
          </NavLink>
        </div>
      </div>
      <div className="lg:hidden">
        <NavMobile />
      </div>
      {/* Layer */}
      {nav ? (
        <div className="w-full h-screen fixed bg-black/80 z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <div className="container mx-auto py-5">
          <AiOutlineClose
            onClick={() => setNav(!nav)}
            size={25}
            className="absolute right-4 top-6 cursor-pointer"
          />
          <div className="pl-4">
            <span className="font-bold text-2xl">GKJ Salib Putih</span>
          </div>
          <nav className="text-[20px] ml-4 mt-10">
            <ul className="">
              <li className="flex items-center mb-4">
                <AiOutlineHome className="mr-4" />{" "}
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="flex items-center mb-4">
                <AiOutlineProfile className="mr-4" />{" "}
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <li className="flex items-center mb-4">
                <AiOutlineSchedule className="mr-4" />{" "}
                <NavLink to="/jadwalibadah">Jadwal Ibadah</NavLink>
              </li>
              <li className="flex items-center mb-4">
                <AiOutlineBook className="mr-4" />{" "}
                <NavLink to="/wartajemaat">Warta Jemaat</NavLink>
              </li>
              <li className="flex items-center mb-4">
                <FiActivity className="mr-4" />{" "}
                <NavLink to="/kegiatan">Kegiatan</NavLink>
              </li>
              <li className="flex items-center mb-4">
                <AiOutlineHeart className="mr-4" />{" "}
                <NavLink to="/renungan">Renungan</NavLink>
              </li>
              <li className="flex items-center mb-4">
                <HiOutlinePhotograph className="mr-4" />{" "}
                <NavLink to="/gallery">Gallery</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
