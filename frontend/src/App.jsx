import { Routes, Route } from "react-router-dom";
import DatabaseList from "./Components/DatabaseList";
import Home from "./pages/Home";
import "./main.css";

import TestCalculAlgo from "./Components/TestCalculAlgo";

function App() {
  return (
    <div>
      <Home />
      <TestCalculAlgo />
      <Routes>
        <Route path="/databaselist" element={<DatabaseList />} />
      </Routes>
    </div>
  );
}

export default App;
