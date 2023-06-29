import { Routes, Route } from "react-router-dom";
import Burger from "./Components/Burger";
import Database from "./Components/Database";
import Home from "./pages/Home";
import PhoneForm from "./Components/NouveauProd";
import "./main.css";
import Login from "./Components/login/Login";
import MobileResume from "./Components/MobileResume";

function App() {
  return (
    <div>
      <Burger />

      <Home />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/nouveauproduit" element={<PhoneForm />} />
        <Route path="/databaselist" element={<Database />} />
        <Route path="/resume" element={<MobileResume />} />
      </Routes>
    </div>
  );
}

export default App;
