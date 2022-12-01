import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";

const JadwalIbadahBaru = () => {
  const [jadwalIbadah, setJadwalIbadah] = useState([]);

  useEffect(() => {
    getJadwalIbadah();
  }, []);

  const getJadwalIbadah = async () => {
    const response = await axios.get("http://localhost:3000/jadwalibadah");
    setJadwalIbadah(response.data);
  };

  return (
    <div>
      <Header />
      <div style={{ height: "500px" }}>
        <div className="bg-[#87C9FF] text-center text-3xl font-semibold hover:text-slate-700 font-serif py-3 pt-10">
          <span className="">Jadwal Ibadah</span>
        </div>
        <div className="container mx-auto flex">
          <div className="container mx-auto pt-6">
            <div className="bg-slate-300">
              <p className="text-2xl font-semibold">Tanggal</p>
              <div className="pt-2">
                <hr className="text-black" />
                {jadwalIbadah.map((jadwalIbadah, index) => (
                  <div className="pb-2">
                    <hr />
                    <td>{jadwalIbadah.waktu}</td>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="container mx-auto pt-6">
            <div className="bg-slate-300">
              <p className="text-2xl font-semibold">Tempat</p>
              <div className="pt-2">
                <hr className="text-black" />
                {jadwalIbadah.map((jadwalIbadah, index) => (
                  <div className="">
                    <td>{jadwalIbadah.tempat}</td>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="container mx-auto pt-6">
            <div className="bg-slate-300">
              <p className="text-2xl font-semibold">Keterangan</p>
              <div className="pt-2">
                <hr className="text-black" />
                {jadwalIbadah.map((jadwalIbadah, index) => (
                  <div className="">
                    <td>{jadwalIbadah.keterangan}</td>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default JadwalIbadahBaru;
