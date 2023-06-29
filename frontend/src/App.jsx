import { Routes, Route } from "react-router-dom";
import DatabaseList from "./Components/DatabaseList";
import Home from "./pages/Home";
import "./main.css";

function App() {
  return (
    <div>
      <Home />

      <Routes>
        <Route path="/databaselist" element={<DatabaseList />} />
      </Routes>
    </div>
  );
}

export default App;
