import Footer from "../components/Footer";
import Header from "../components/Header";
import Slider from "../components/Slider";
import bg1 from "../components/bg1.jpg";

const Home = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="container mx-auto py-5">
          <div className="flex gap-5">
            <Slider />
            <div className="bg-[#17EBDD] py-3 pl-2">
              <span className="text-[20px] font-semibold">Visi :</span>
              <p>
                Pada tahun 2023, GKJ menjadi jemaat Kristus yang mewartakan
                keselamatan secara visioner-antisipatif, berintegritas
                pelayanan, mampu mengembangkan diri, sadar gender, berwawasan
                kebangsaan dan ekologis, didasarkan pada kecakapan
                berteologisecara kontekstual.
              </p>
              <br />
              <span className="text-[20px] font-semibold">Misi :</span>
              <p>Merupakan operasionalisasi dari visi GKJ :</p>
              <li>
                Menjadi Gereja yang terus menerus diperbarui berdasar firman
                Tuhan. Pembaruan itu antara lain terwujud dalam upaya memupuk
                spiritualitas, memelihara penghayatan akan kehadiran Allah dalam
                seantero kehidupan, serta memelihara relasinya dengan Allah
                secara sungguh-sungguh.
              </li>
              <li>
                Menjadi Gereja yang meneladan Yesus Kristus dalam seluruh
                kehidupannya dengan cara hadir di tengah dunia sebagai teladan
                kebenaran dan kekudusan.
              </li>
              <li>
                Menjadi Gereja yang mewujudnyatakan keselamatan dalam
                kehidupannya dan dalam keutuhan ciptaan, dengan memupuk semangat
                ekumenis, peduli lingkungan, memperjuangkan terwujudnya keadilan
                dan damai sejahtera bagi semua umat manusia
              </li>
            </div>
          </div>
        </div>

        {/* Garis Pembatas */}
        <div className="pb-5">
          <div class="bg-[#514343] border-solid border-2 border-sky-500"></div>
        </div>

        {/* Jadwal Ibadah Minggu */}
        <div>
          <div className="container mx-auto py-5 text-center justify-between">
            <div className="flex gap-5 justify-between">
              <div className="bg-[#17EBDD] py-2 px-2">
                <span className="text-[25px] font-semibold">
                  Jadwal Ibadah Minggu
                </span>
                <div className="grid grid-cols-3 gap-4">
                  <div className=" rounded-xl text-center relative">
                    <div className="absolute w-full h-full text-white bg-black/50 rounded-md">
                      <p className="font-semibold text-2xl">Gereja Induk</p>
                      <button className=" border-white bg-white text-black absolute bottom-1 left-1 right-1 hover:bg-slate-300 rounded">
                        <a
                          href="https://docs.google.com/document/d/1amr17LLDSAewP9A-8Jx1HbnwFkLq5dru/edit?usp=sharing&ouid=105663213325192004771&rtpof=true&sd=true"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Lihat Selengkapnya
                        </a>
                      </button>
                    </div>
                    <img
                      src={bg1}
                      alt=""
                      width={400}
                      className="rounded-md shadow-xl"
                    />
                  </div>
                  <div className=" rounded-xl text-center relative">
                    <div className="absolute w-full h-full text-white bg-black/50 rounded-md">
                      <p className="font-semibold text-2xl">Gereja Induk</p>
                      <button className=" border-white bg-white text-black absolute bottom-1 left-1 right-1 hover:bg-slate-300 rounded">
                        <a
                          href="https://docs.google.com/document/d/1amr17LLDSAewP9A-8Jx1HbnwFkLq5dru/edit?usp=sharing&ouid=105663213325192004771&rtpof=true&sd=true"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Lihat Selengkapnya
                        </a>
                      </button>
                    </div>
                    <img
                      src={bg1}
                      alt=""
                      width={400}
                      className="rounded-md shadow-xl"
                    />
                  </div>
                  <div className=" rounded-xl text-center relative">
                    <div className="absolute w-full h-full text-white bg-black/50 rounded-md">
                      <p className="font-semibold text-2xl">Gereja Induk</p>
                      <button className=" border-white bg-white text-black absolute bottom-1 left-1 right-1 hover:bg-slate-300 rounded">
                        <a
                          href="https://docs.google.com/document/d/1amr17LLDSAewP9A-8Jx1HbnwFkLq5dru/edit?usp=sharing&ouid=105663213325192004771&rtpof=true&sd=true"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Lihat Selengkapnya
                        </a>
                      </button>
                    </div>
                    <img
                      src={bg1}
                      alt=""
                      width={400}
                      className="rounded-md shadow-xl"
                    />
                  </div>
                  <div className=" rounded-xl text-center relative">
                    <div className="absolute w-full h-full text-white bg-black/50 rounded-md">
                      <p className="font-semibold text-2xl">Gereja Induk</p>
                      <button className=" border-white bg-white text-black absolute bottom-1 left-1 right-1 hover:bg-slate-300 rounded">
                        <a
                          href="https://docs.google.com/document/d/1amr17LLDSAewP9A-8Jx1HbnwFkLq5dru/edit?usp=sharing&ouid=105663213325192004771&rtpof=true&sd=true"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Lihat Selengkapnya
                        </a>
                      </button>
                    </div>
                    <img
                      src={bg1}
                      alt=""
                      width={400}
                      className="rounded-md shadow-xl"
                    />
                  </div>
                  <div className=" rounded-xl text-center relative">
                    <div className="absolute w-full h-full text-white bg-black/50 rounded-md">
                      <p className="font-semibold text-2xl">Gereja Induk</p>
                      <button className=" border-white bg-white text-black absolute bottom-1 left-1 right-1 hover:bg-slate-300 rounded">
                        <a
                          href="https://docs.google.com/document/d/1amr17LLDSAewP9A-8Jx1HbnwFkLq5dru/edit?usp=sharing&ouid=105663213325192004771&rtpof=true&sd=true"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Lihat Selengkapnya
                        </a>
                      </button>
                    </div>
                    <img
                      src={bg1}
                      alt=""
                      width={400}
                      className="rounded-md shadow-xl"
                    />
                  </div>
                  <div className=" rounded-xl text-center relative">
                    <div className="absolute w-full h-full text-white bg-black/50 rounded-md">
                      <p className="font-semibold text-2xl">Gereja Induk</p>
                      <button className=" border-white bg-white text-black absolute bottom-1 left-1 right-1 hover:bg-slate-300 rounded">
                        <a
                          href="https://docs.google.com/document/d/1amr17LLDSAewP9A-8Jx1HbnwFkLq5dru/edit?usp=sharing&ouid=105663213325192004771&rtpof=true&sd=true"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Lihat Selengkapnya
                        </a>
                      </button>
                    </div>
                    <img
                      src={bg1}
                      alt=""
                      width={400}
                      className="rounded-md shadow-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Jadwal Ibadah Khusus */}
              <div className="bg-[#17EBDD] py-2 px-2">
                <div className="grid grid-cols-1 mb-4 ">
                  <span className="text-[25px] font-semibold mb-1">
                    Jadwal Ibadah Khusus
                  </span>
                  <div className=" rounded-xl text-center relative ">
                    <div className="absolute w-full h-full text-white bg-black/50 rounded-md">
                      <p className="font-semibold text-2xl">Gereja Induk</p>
                      <button className=" border-white bg-white text-black absolute bottom-1 left-1 right-1 hover:bg-slate-300 rounded">
                        <a
                          href="https://docs.google.com/document/d/1amr17LLDSAewP9A-8Jx1HbnwFkLq5dru/edit?usp=sharing&ouid=105663213325192004771&rtpof=true&sd=true"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Lihat Selengkapnya
                        </a>
                      </button>
                    </div>
                    <img
                      src={bg1}
                      alt=""
                      width={400}
                      className="rounded-md shadow-xl"
                    />
                  </div>
                  <div className=" rounded-xl text-center relative mt-3">
                    <div className="absolute w-full h-full text-white bg-black/50 rounded-md">
                      <p className="font-semibold text-2xl">Gereja Induk</p>
                      <button className=" border-white bg-white text-black absolute bottom-1 left-1 right-1 hover:bg-slate-300 rounded">
                        <a
                          href="https://docs.google.com/document/d/1amr17LLDSAewP9A-8Jx1HbnwFkLq5dru/edit?usp=sharing&ouid=105663213325192004771&rtpof=true&sd=true"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Lihat Selengkapnya
                        </a>
                      </button>
                    </div>
                    <img
                      src={bg1}
                      alt=""
                      width={400}
                      className="rounded-md shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Garis Pembatas */}
        <div className="pb-5 pt-5">
          <div class="bg-[#514343] border-solid border-2 border-sky-500"></div>
        </div>

        {/* Warta Jemaat */}
        <div className="container mx-auto bg-[#17EBDD]">
          <div className="text-center">
            <span className="text-[25px] font-semibold">Warta Jemaat</span>
          </div>
          <div className="flex py-2 px-2 gap-10">
            <div>
              <img src={bg1} width="700" alt="" />
              <span className="bg-[#FFF]">Warta Minggu, 25 September 2022</span>
            </div>
            <div className="">
              <div className="flex flex-col pb-28">
                <span>Warta Minggu, 18 September 2022</span>
                <span>Tema: Jadilah Garam dan Terang Dunia</span>
                <div>
                  <a
                    href="https://docs.google.com/document/d/1amr17LLDSAewP9A-8Jx1HbnwFkLq5dru/edit?usp=sharing&ouid=105663213325192004771&rtpof=true&sd=true"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lihat Disini
                  </a>
                </div>
              </div>
              <div className="flex flex-col pb-28">
                <span>Warta Minggu, 18 September 2022</span>
                <span>Tema: Jadilah Garam dan Terang Dunia</span>
                <div>
                  <a
                    href="https://docs.google.com/document/d/1amr17LLDSAewP9A-8Jx1HbnwFkLq5dru/edit?usp=sharing&ouid=105663213325192004771&rtpof=true&sd=true"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lihat Disini
                  </a>
                </div>
              </div>
              <div className="flex flex-col">
                <span>Warta Minggu, 18 September 2022</span>
                <span>Tema: Jadilah Garam dan Terang Dunia</span>
                <div>
                  <a
                    href="https://docs.google.com/document/d/1amr17LLDSAewP9A-8Jx1HbnwFkLq5dru/edit?usp=sharing&ouid=105663213325192004771&rtpof=true&sd=true"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lihat Disini
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Garis Pembatas */}
        <div className="pb-5 pt-5">
          <div class="bg-[#514343] border-solid border-2 border-sky-500"></div>
        </div>

        {/* Footer */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
