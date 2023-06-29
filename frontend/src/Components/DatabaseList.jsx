import React, { useEffect, useState } from "react";

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

  return (
    <div className="flex justify-center">
      <div className="gap-4 space-y-4">
        <h2 className="flex justify-center font-bold space-y-5 mt-32">
          Base de données des smartphones
        </h2>
        {smartphones.length > 0 &&
          smartphones.map((smartphone) => (
            <div
              key={smartphone.product_id}
              className="bg-white rounded-lg p-4 shadow-md max-w-sm mx-auto h-80 border-2 border-yellow-500"
            >
              <div className="flex justify-center items-center">
                <img
                  src={smartphone.phone_img}
                  alt="smartphone"
                  className="w-40 h-auto object-contain mb-2"
                />
              </div>
              <div className="bg-[#00adb063]">
                <h3 className="text-xl font-bold mb-1">
                  {smartphone.brand} {smartphone.model}
                </h3>
                <h4 className="text-lg font-medium mb-1">
                  {smartphone.price} €
                </h4>
                <p className="text-black-500">
                  Condition : {smartphone.phone_condition}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default DatabaseList;
