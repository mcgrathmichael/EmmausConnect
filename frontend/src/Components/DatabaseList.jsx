import React, { useEffect, useState } from "react";

function DatabaseList() {
  const [smartphones, setSmartphones] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/products`)
      .then((response) => {
        /* console.log(response.json()); */
        setSmartphones(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {smartphones.length > 0 &&
        smartphones.map((smartphone) => (
          <>
            <img
              key={smartphone.id}
              src={smartphone.phone_img}
              alt="smartphone"
            />
            <h3>
              {smartphone.brand} {smartphone.model}
            </h3>
            <h4>{smartphone.price}</h4>
            <p>{smartphone.phone_condition}</p>
          </>
        ))}
    </div>
  );
}

export default DatabaseList;
