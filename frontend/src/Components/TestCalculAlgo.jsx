import React from "react";

function TestCalculAlgo() {
  // Price data
  const ramPrices = {
    1: 30,
    2: 40,
    3: 54,
    4: 70,
    6: 80,
    8: 100,
    12: 120,
    16: 160,
  };

  const storagePrices = {
    16: 31,
    32: 45,
    64: 66,
    128: 90,
    256: 120,
    512: 150,
    1000: 250,
  };

  //  update this line after get form from Mich: (dataState.ram, dataState.storage, dataState.isScratched, dataState.isLocked)
  const calculatePhonePrice = (ram, storage, isScratched, isLocked) => {
    const ramPrice = ramPrices[ram];
    const storagePrice = storagePrices[storage];
    let totalPrice = ramPrice + storagePrice;

    if (isScratched === "Présence de rayures") {
      // Réduction de 50% pour un telephone rayé
      totalPrice *= 0.5;
    }

    if (isLocked !== null) {
      // Réduction de 10% pour un téléphone bloqué
      totalPrice *= 0.9;
    }

    return totalPrice;
  };

  // console.log(calculatePhonePrice(8, 512, "Présence de rayures", "SFR"));
  calculatePhonePrice();
  return <div>test calcul algo</div>;
}

export default TestCalculAlgo;
