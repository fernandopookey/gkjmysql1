import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JadwalIbadah from "./pages/JadwalIbadah";
import WartaJemaat from "./pages/WartaJemaat";
import Kegiatan from "./pages/Kegiatan";
import Renungan from "./pages/Renungan";
import Artikel from "./pages/Artikel";
import Gallery from "./pages/Gallery";
import Profile from "./pages/Profile";
import HeaderSearch from "./components/HeaderSearch";
import Login from "./components/Login";
import JadwalIbadahBaru from "./pages/JadwalIbadahBaru";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jadwalibadah" element={<JadwalIbadah />} />
        <Route path="/wartajemaat" element={<WartaJemaat />} />
        <Route path="/kegiatan" element={<Kegiatan />} />
        <Route path="/renungan" element={<Renungan />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/header" element={<HeaderSearch />} />
        <Route path="/loginadmin" element={<Login />} />
        <Route path="/jadwalibadahbaru" element={<JadwalIbadahBaru />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
