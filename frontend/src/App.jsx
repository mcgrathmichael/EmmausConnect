/* eslint-disable */
import { Routes, Route } from "react-router-dom";
import Burger from "./Components/Burger";
import Database from "./Components/Database";
import Home from "./pages/Home";
import PhoneForm from "./Components/NouveauProd";
import "./main.css";
import Login from "./Components/login/Login";
import logo from "./assets/emmaus.svg";

function App() {
  return (
    <div className="">
      <div className="fixed top-0 right-0 z-50">
        <img src={logo} alt="Image" className="h-24" />
      </div>

      <Burger />

      <Home />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/nouveauproduit" element={<PhoneForm />} />
        <Route path="/databaselist" element={<Database />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
