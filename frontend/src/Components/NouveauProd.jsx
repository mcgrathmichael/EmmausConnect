import React, { useEffect, useState } from "react";
import axios from "axios";

function PhoneForm() {
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

  const [calculPrice, setCalculPrice] = useState(false);

  let totalPrice = 0;
  const calculatePhonePrice = (ram, storage, isScratched, isLocked) => {
    const ramPrice = ramPrices[ram];
    const storagePrice = storagePrices[storage];
    totalPrice = ramPrice + storagePrice;

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

  const [phoneDetails, setPhoneDetails] = useState({
    brand: "",
    model: "",
    os: "",
    ram: "",
    storage: "",
    screen_size: "",
    network: "",
    charger: "",
    phone_condition: "",
    blocked_operator: "",
    price: 0,
    phone_img: "",
    account_id_account: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPhoneDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any further processing or calculations with the phoneDetails object
    // For example, you can calculate the value of the phone here based on the entered details

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/products`, phoneDetails)
      .then(() => setCalculPrice(true))
      .catch((error) => {
        // Handle the error if the request fails
        console.error(error);
      });
  };

  useEffect(() => {
    calculatePhonePrice(
      phoneDetails.ram,
      phoneDetails.storage,
      phoneDetails.phone_condition,
      phoneDetails.blocked_operator
    );
  }, [calculPrice]);

  return (
    <form onSubmit={handleSubmit} className="m-12 p-14 space-y-6">
      <div>
        <label className="text-lg">
          Marque :
          <select
            type="text"
            name="brand"
            value={phoneDetails.brand}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2"
            required
          >
            <option value="LG">LG</option>
            <option value="Sony">Sony</option>
            <option value="Nokia">Nokia</option>
            <option value="Google">Google</option>
            <option value="Samsung">Samsung</option>
            <option value="Huawei">Huawei</option>
            <option value="Xiaomi">Xiaomi</option>
            <option value="Apple">Apple</option>
          </select>
        </label>
        <div className="flex justify-center md:justify-between">
          <button
            type="button"
            className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-lg"
          >
            Précédent
          </button>
          <button
            type="button"
            className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-lg"
          >
            Suivant
          </button>
        </div>
      </div>

      <div>
        <label className="text-lg">
          Modèle :
          <input
            type="text"
            name="model"
            value={phoneDetails.model}
            required
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
      </div>

      <div>
        <label className="text-lg">
          Système d'exploitation (OS) :
          <select
            name="os"
            value={phoneDetails.os}
            onChange={handleInputChange}
            required
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="">Sélectionnez un OS</option>
            <option value="iOS">iOS</option>
            <option value="Windows">Windows</option>
            <option value="Android">Android</option>
          </select>
        </label>
      </div>

      <div>
        <label className="text-lg">
          Stockage :
          <select
            name="storage"
            value={phoneDetails.storage}
            onChange={handleInputChange}
            required
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="">Sélectionnez Stockage</option>
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="64">64</option>
          </select>
        </label>
      </div>

      <div>
        <label className="text-lg">
          RAM :
          <select
            name="ram"
            value={phoneDetails.ram}
            onChange={handleInputChange}
            required
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="">Sélectionnez RAM</option>
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="16">16</option>
          </select>
        </label>
      </div>

      {/* Add more form fields for other phone details */}

      <div>
        <label className="text-lg">
          Taille de l'écran :
          <input
            type="text"
            name="screen_size"
            value={phoneDetails.screen_size}
            required
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
      </div>

      <div>
        <label className="text-lg">
          Réseau :
          <select
            name="network"
            value={phoneDetails.network}
            required
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="">Sélectionnez un réseau</option>
            <option value="3g">3G</option>
            <option value="4g">4G</option>
            <option value="5g">5G</option>
          </select>
        </label>
      </div>

      <div>
        <label className="text-lg">
          Chargeur :
          <select
            type="text"
            name="charger"
            required
            value={phoneDetails.charger}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="">Sélectionnez une option</option>
            <option value="1">Oui</option>
            <option value="0">Non</option>
          </select>
        </label>
      </div>

      <div>
        <label className="text-lg">
          État du téléphone :
          <select
            name="phone_condition"
            required
            value={phoneDetails.phone_condition}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="">Sélectionnez un état</option>
            <option value="Comme neuf">Comme neuf</option>
            <option value="Bon état">Bon état</option>
            <option value="Présence de rayures">Présence de rayures</option>
          </select>
        </label>
      </div>

      <div>
        <label className="text-lg">
          Opérateur bloqué :
          <select
            name="blocked_operator"
            value={phoneDetails.blocked_operator}
            required
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="">Sélectionnez une option</option>
            <option value="Oui">Oui</option>
            <option value="Non">Non</option>
          </select>
        </label>
      </div>

      <div className="flex justify-center md:justify-between">
        <button
          type="button"
          className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-lg"
        >
          Précédent
        </button>
        <button
          onClick={handleSubmit}
          type="button"
          className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-lg"
        >
          Enregistrer
        </button>
      </div>
    </form>
  );
}

export default PhoneForm;

//     <div className=" m-12 p-14  ">
//       <div>
//         <h2 className="bg-gray-300 my-12 p-24 rounded-md flex  justify-center">
//           Quel est le système d’exploitation du téléphone ?
//         </h2>
//         <div className="flex gap-10 row">
//           <h3 className="bg-gray-200">Android</h3>
//           <h3 className="bg-gray-200 ">Apple</h3>
//         </div>
//       </div>
//       <div className="flex justify-center gap-12">
//         <button
//           className=" bg-blue-600 text-white hover:ring-2  hover:bg-blue-700  hover:ease-in-out hover:ring-green ring-offset-1 overflow-hidden p-6 rounded-xl "
//           type="button"
//         >
//           Précedent
//         </button>
//         <button
//           className=" bg-blue-600 text-white hover:ring-2 hover:bg-blue-700 hover:ease-in-out hover:ring-green ring-offset-1 overflow-hidden p-6 rounded-xl "
//           type="button"
//         >
//           Suivant
//         </button>
//       </div>
//     </div>
//   );
// }

// export default NouveauProduit;
