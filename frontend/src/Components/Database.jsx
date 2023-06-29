import React, { useEffect, useState } from "react";
import PhoneList from "./PhoneList";

function DatabaseList() {
  const [smartphones, setSmartphones] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/products`)
      .then((response) => response.json())
      .then((data) => {
        setSmartphones(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <PhoneList smartphones={smartphones} />;
}

export default DatabaseList;
