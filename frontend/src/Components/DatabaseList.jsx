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
      <div className="gap-5 space-y-5 bg-blue-600 p-4 ">
        {smartphones.length > 0 &&
          smartphones.map((smartphone) => (
            <div
              key={smartphone.product_id}
              className="bg-white rounded-lg p-4 shadow-md mx-auto h-96 lg:w-100"
            >
              <div className=" h-80 flex flex-col md:flex-row justify-around content-center">
                <div className="flex justify-center items-center">
                  <img
                    src={smartphone.phone_img}
                    alt="smartphone"
                    className="w-40 h-auto object-contain mb-2 lg:w-50"
                  />
                </div>
                <div className="  w-80 flex justify-items-center items-center justify-center">
                  <div>
                    <h3 className="text-xl font-bold mb-1 md:text-2xl">
                      {smartphone.brand} <br /> {smartphone.model}
                    </h3>
                    <h4 className="text-lg font-medium mb-1 md:text-xl">
                      {smartphone.price} €
                    </h4>
                    <p className="text-gray-500 md:text-xl">
                      {smartphone.phone_condition}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default DatabaseList;
