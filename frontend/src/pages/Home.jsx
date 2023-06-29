import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handeClickDbList = () => {
    navigate("/DatabaseList");
  };

  return (
    <div>
      <button type="button" onClick={handeClickDbList}>
        Consultez la base de données
      </button>
    </div>
  );
}

export default Home;
