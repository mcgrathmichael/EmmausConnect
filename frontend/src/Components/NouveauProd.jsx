/* eslint-disable */
import React, { useState } from "react";
import axios from "axios";

function PhoneForm() {
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
    phone_img: "",
    account_id_account: 1234,
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
      .then((response) => {
        // Handle the server response if needed
      })
      .catch((error) => {
        // Handle the error if the request fails
      });

    // Reset the form
    setPhoneDetails({
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
      phone_img: "",
      account_id_account: 1234,
    });
  };

  console.log(phoneDetails);
  return (
    <form
      onSubmit={handleSubmit}
      className="md:m-12 m-6 md:p-14 space-y-6 sm:text-md text-gray-700"
    >
      <div className="flex md:p-20 p-10 justify-center h-1/2 rounded-xl bg-gradient-to-bl from-blue-400 to-emerald-400 ">
        <label className="text-xl h-1/2 font-bold">
          Marque :
          <select
            type="text"
            name="brand"
            value={phoneDetails.brand}
            onChange={handleInputChange}
            className="border border-gray-300 sm:text-md rounded-md p-4"
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
      </div>

      <div className="flex md:p-20 p-10 justify-center h-1/2 rounded-xl bg-gradient-to-bl from-blue-400 to-emerald-400">
        <label className="text-xl h-1/2 font-bold">
          Modèle :
          <input
            type="text"
            name="model"
            value={phoneDetails.model}
            required
            onChange={handleInputChange}
            className="border  border-gray-300 rounded-md p-2 w-1/2"
          />
        </label>
      </div>
      <div className="flex md:p-20 p-10 justify-center h-1/2 rounded-xl bg-gradient-to-bl from-blue-400 to-emerald-400">
        <label className="text-xl h-1/2 font-bold">
          Système d'exploitation (OS):
          <select
            name="os"
            value={phoneDetails.os}
            onChange={handleInputChange}
            required
            className="border border-gray-300 rounded-md p-2 sm:w-24 md:w-48"
          >
            <option value="">Sélectionnez un OS</option>
            <option value="iOS">iOS</option>
            <option value="Windows">Windows</option>
            <option value="Android">Android</option>
          </select>
        </label>
      </div>

      <div className="flex md:p-20 p-10 justify-center h-1/2 rounded-xl bg-gradient-to-bl from-blue-400 to-emerald-400">
        <label className="text-xl font-bold">
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

      <div className="flex md:p-20 p-10 justify-center h-1/2 rounded-xl bg-gradient-to-bl from-blue-400 to-emerald-400">
        <label className="text-xl font-bold">
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

      <div className="flex md:p-20 p-10 justify-center h-1/2 rounded-xl bg-gradient-to-bl from-blue-400 to-emerald-400">
        <label className="text-xl font-bold">
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

      <div className="flex md:p-20 p-10 justify-center h-1/2 rounded-xl bg-gradient-to-bl from-blue-400 to-emerald-400">
        <label className="text-xl font-bold">
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

      <div className="flex md:p-20 p-10 justify-center h-1/2 rounded-xl bg-gradient-to-bl from-blue-400 to-emerald-400">
        <label className="text-xl font-bold">
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

      <div className="flex md:p-20 p-10 justify-center h-1/2 rounded-xl bg-gradient-to-bl from-blue-400 to-emerald-400">
        <label className="text-xl font-bold">
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
            <option value="Rayure">Rayure</option>
          </select>
        </label>
      </div>

      <div className="flex md:p-20 p-10 justify-center h-1/2 rounded-xl bg-gradient-to-bl from-blue-400 to-emerald-400">
        <label className="text-xl font-bold">
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
      {/* 
      <div className="flex md:p-20 p-10 justify-center h-1/2 rounded-xl bg-gradient-to-bl from-blue-400 to-emerald-400">
        <label className="text-xl font-bold">
          Prix :
          <input
            type="text"
            name="price"
            value={phoneDetails.price}
            required
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
      </div> */}

      <div>
        {/* <label className="text-lg">
          Image du téléphone :
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border border-gray-300 rounded-md p-2"
          />
        </label> */}
      </div>

      <div className="flex md:p-20 p-10 justify-center h-1/2 rounded-xl bg-gradient-to-bl from-blue-400 to-emerald-400">
        <label className="text-xl font-bold">
          ID du compte :
          <input
            type="text"
            name="account_id_account"
            value={phoneDetails.account_id_account}
            required
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
      </div>

      <div className="flex justify-center md:justify-center">
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
// overflow-hidden p-6 rounded-xl "
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
