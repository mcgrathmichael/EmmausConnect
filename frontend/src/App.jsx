import { Routes, Route } from "react-router-dom";
import Burger from "./Components/Burger";
import DatabaseList from "./Components/DatabaseList";
import PhoneForm from "./Components/NouveauProd";
import "./main.css";

import TestCalculAlgo from "./Components/TestCalculAlgo";

function App() {
  return (
    <div>
      <Burger />
      <TestCalculAlgo />
      <Routes>
        <Route path="/nouveauproduit" element={<PhoneForm />} />
        <Route path="/databaselist" element={<DatabaseList />} />
      </Routes>
    </div>
  );
}

export default App;
