import React, { useState } from "react";

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
    price: "",
    phone_img: "",
    account_id_account: "",
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
      price: "",
      phone_img: "",
      account_id_account: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="m-12 p-14 space-y-6">
      <div>
        <label className="text-lg">
          Marque :
          <input
            type="text"
            name="brand"
            value={phoneDetails.brand}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
      </div>
      <div className="flex justify-between">
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

      <div>
        <label className="text-lg">
          Modèle :
          <input
            type="text"
            name="model"
            value={phoneDetails.model}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
      </div>
      <div className="flex justify-between">
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

      <div>
        <label className="text-lg">
          Système d'exploitation (OS) :
          <select
            name="os"
            value={phoneDetails.os}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="">Sélectionnez un OS</option>
            <option value="Apple">Apple</option>
            <option value="Android">Android</option>
          </select>
        </label>
      </div>
      <div className="flex justify-between">
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

      <div>
        <label className="text-lg">
          RAM :
          <input
            type="text"
            name="ram"
            value={phoneDetails.ram}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
      </div>
      <div className="flex justify-between">
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

      {/* Add more form fields for other phone details */}

      <div>
        <label className="text-lg">
          Taille de l'écran :
          <input
            type="text"
            name="screen_size"
            value={phoneDetails.screen_size}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
      </div>
      <div className="flex justify-between">
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

      <div>
        <label className="text-lg">
          Réseau :
          <select
            name="network"
            value={phoneDetails.network}
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
      <div className="flex justify-between">
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

      <div>
        <label className="text-lg">
          Chargeur :
          <input
            type="text"
            name="charger"
            value={phoneDetails.charger}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
      </div>
      <div className="flex justify-between">
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

      <div>
        <label className="text-lg">
          État du téléphone :
          <select
            name="phone_condition"
            value={phoneDetails.phone_condition}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="">Sélectionnez un état</option>
            <option value="Intact">Intact</option>
            <option value="Comme neuf">Comme neuf</option>
            <option value="Rayure">Rayure</option>
          </select>
        </label>
      </div>
      <div className="flex justify-between">
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

      <div>
        <label className="text-lg">
          Opérateur bloqué :
          <select
            name="blocked_operator"
            value={phoneDetails.blocked_operator}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="">Sélectionnez une option</option>
            <option value="Oui">Oui</option>
            <option value="Non">Non</option>
          </select>
        </label>
      </div>
      <div className="flex justify-between">
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

      <div>
        <label className="text-lg">
          Prix :
          <input
            type="text"
            name="price"
            value={phoneDetails.price}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
      </div>
      <div className="flex justify-between">
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

      <div>
        <label className="text-lg">
          Image du téléphone :
          <input
            type="text"
            name="phone_img"
            value={phoneDetails.phone_img}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
      </div>

      <div className="flex justify-between">
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

      <div>
        <label className="text-lg">
          ID du compte :
          <input
            type="text"
            name="account_id_account"
            value={phoneDetails.account_id_account}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
      </div>

      <div className="flex justify-between">
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