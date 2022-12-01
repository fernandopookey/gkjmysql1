import React from "react";
import map1 from "./map1.png";
import {
  AiFillTwitterCircle,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#2B6B67] text-neutral-50">
      <div className="container mx-auto flex py-3 gap-5 justify-between">
        <div className="">
          <a
            href="https://www.google.com/maps/place/Gereja+Kristen+Jawa+Salib+Putih/@-7.360398,110.478634,15z/data=!4m2!3m1!1s0x0:0xbbd68af219e61b35?sa=X&ved=2ahUKEwjrxpyU3536AhXNGbcAHcgkAtgQ_BJ6BAhpEAU"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={map1}
              alt=""
              width={240}
              className="h-[150px] object-cover scale-100 hover:scale-105 ease-in duration-300"
            />
          </a>
        </div>
        <div className="flex flex-col">
          <span>Jl. Hasanudin KM. 04 Kumpulrejo,</span>
          <span>Kec. Argomulyo Kota Salatiga, Jawa Tengah</span>
          <span className="mt-3">Kontak</span>
          <span>0852541313526 Fernando</span>
          <span>Email nandopookey@gmail.com</span>
        </div>
        <div className="flex flex-col">
          <span>No Rekening</span>
          <span>a.n GKJ Salib Putih Salatiga 5438690836 BNI</span>
          <span>a.n GKJ Salib Putih Salatiga 5237478857 BRI</span>
        </div>
        <div>
          <ul>
            <li className="flex items-center gap-4 pb-4">
              <AiOutlineInstagram /> @GKJSalibPutih
            </li>
            <li className="flex items-center gap-4 pb-4">
              <AiOutlineFacebook /> @GKJSalibPutih
            </li>
            <li className="flex items-center gap-4 pb-4">
              <AiOutlineYoutube /> @GKJSalibPutih
            </li>
            <li className="flex items-center gap-4 pb-4">
              <AiFillTwitterCircle /> @GKJSalibPutih
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
