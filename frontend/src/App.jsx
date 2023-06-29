import { Routes, Route } from "react-router-dom";
import DatabaseList from "./Components/DatabaseList";
import Home from "./pages/Home";
import "./main.css";
import Login from "./Components/login/Login";

function App() {
  return (
    <div>
      <Home />
      <Login />
      <Routes>
        <Route path="/databaselist" element={<DatabaseList />} />
      </Routes>
    </div>
  );
}

export default App;
