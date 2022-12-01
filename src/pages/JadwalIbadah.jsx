import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";

const JadwalIbadah = () => {
  const [jadwalIbadah, setJadwalIbadah] = useState([]);

  useEffect(() => {
    getJadwalIbadah();
  });

  const getJadwalIbadah = async () => {
    const response = await axios.get("http://localhost:3000/jadwalibadah");
    setJadwalIbadah(response.data);
  };

  return (
    <div>
      <Header />
      <div style={{ height: "700px" }}>
        <div className="bg-[#87C9FF] text-center text-3xl font-semibold hover:text-slate-700 font-serif py-3 pt-10">
          <span className="">Jadwal Ibadah</span>
        </div>
        <div className="pb-10">
          <div className="container mx-auto flex p-7 pl-2 space-x-5 justify-between">
            <div className="h-96 w-80 bg-[#ECECEC] text-center rounded-md">
              <div className="bg-[#ECECEC] p-3">
                <span className="text-2xl font-semibold">Gedung Utama</span>
                <div className="flex flex-col text-white p-3 space-y-3">
                  <div className="bg-[#6B6B6B] py-1">
                    <span>
                      Minggu, 25 September 2022. Ibadah umum : 07.00 WIB.
                    </span>
                  </div>
                  <div className="bg-[#6B6B6B] py-1">
                    <span>
                      Minggu, 2 Oktober 2022. Ibadah umum : 07.00 WIB.
                    </span>
                  </div>
                  <div className="bg-[#6B6B6B] py-1">
                    <span>
                      Minggu, 2 Oktober 2022. Ibadah umum : 07.00 WIB.
                    </span>
                  </div>
                  <div className="bg-[#6B6B6B] py-1">
                    <span>
                      Minggu, 2 Oktober 2022. Ibadah umum : 07.00 WIB.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-96 w-80 bg-[#ECECEC] text-center rounded-md">
              <div className="bg-[#ECECEC] p-3">
                <span className="text-2xl font-semibold">
                  Pepanthan Pandanan
                </span>
                <div className="flex flex-col text-white p-3 space-y-3">
                  <div className="bg-[#6B6B6B] py-1">
                    <span>
                      Minggu, 25 September 2022. Ibadah umum : 07.00 WIB.
                    </span>
                  </div>
                  <div className="bg-[#6B6B6B] py-1">
                    <span>
                      Minggu, 2 Oktober 2022. Ibadah umum : 07.00 WIB.
                    </span>
                  </div>
                  <div className="bg-[#6B6B6B] py-1">
                    <span>
                      Minggu, 2 Oktober 2022. Ibadah umum : 07.00 WIB.
                    </span>
                  </div>
                  <div className="bg-[#6B6B6B] py-1">
                    <span>
                      Minggu, 2 Oktober 2022. Ibadah umum : 07.00 WIB.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-96 w-80 bg-[#ECECEC] text-center rounded-md">
              <div className="bg-[#ECECEC] p-3">
                <span className="text-2xl font-semibold">Pepanthan Warak</span>
                <div className="flex flex-col text-white p-3 space-y-3">
                  <div className="bg-[#6B6B6B] py-1">
                    <span>
                      Minggu, 25 September 2022. Ibadah umum : 07.00 WIB.
                    </span>
                  </div>
                  <div className="bg-[#6B6B6B] py-1">
                    <span>
                      Minggu, 2 Oktober 2022. Ibadah umum : 07.00 WIB.
                    </span>
                  </div>
                  <div className="bg-[#6B6B6B] py-1">
                    <span>
                      Minggu, 2 Oktober 2022. Ibadah umum : 07.00 WIB.
                    </span>
                  </div>
                  <div className="bg-[#6B6B6B] py-1">
                    <span>
                      Minggu, 2 Oktober 2022. Ibadah umum : 07.00 WIB.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-96 w-80 bg-[#ECECEC] text-center rounded-md">
              <div className="bg-[#ECECEC] p-3">
                <span className="text-2xl font-semibold">Pepanthan Tetep</span>
                <div className="flex flex-col text-white p-3 space-y-3">
                  <div className="bg-[#6B6B6B] py-1">
                    {jadwalIbadah.map((jadwalIbadah, index) => (
                      <span>
                        <td>{jadwalIbadah.waktu}</td>
                        <td>{jadwalIbadah.tempat}</td>
                        <td>{jadwalIbadah.keterangan}</td>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JadwalIbadah;
