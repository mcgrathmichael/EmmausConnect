import { Routes, Route } from "react-router-dom";
import Burger from "./Components/Burger";
import Database from "./Components/Database";
import Home from "./pages/Home";
import PhoneForm from "./Components/NouveauProd";
import "./main.css";

function App() {
  return (
    <div>
      <Burger />

      <Home />
      <Routes>
        <Route path="/nouveauproduit" element={<PhoneForm />} />
        <Route path="/databaselist" element={<Database />} />
      </Routes>
    </div>
  );
}

export default App;
