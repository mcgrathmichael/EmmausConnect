
import React, { useState } from "react";
import axios from "axios";

const PhoneForm = () => {
  function PhoneForm() {
    const [calculPrice, setCalculPrice] = useState(false);

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
            ></input>
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

        <div></div>

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
};
export default PhoneForm;
=======
import React, { useState } from "react";
import axios from "axios";

function NouveauProd() {
  const [smartphonePrice, setSmartphonePrice] = useState(0);

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

  const calculatePhonePrice = (ram, storage, isScratched, isLocked) => {
    const ramPrice = ramPrices[ram];
    const storagePrice = storagePrices[storage];
    let totalPrice = ramPrice + storagePrice;

    if (isScratched === "Présence de rayures") {
      // Réduction de 50% pour un telephone rayé
      totalPrice *= 0.5;
    }

    if (isLocked === "Oui") {
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

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/products`, phoneDetails)
      .then(() => {
        // La sauvegarde dans la base de données est terminée
        // Utilisez maintenant les données pour calculer le prix
        const phonePrice = calculatePhonePrice(
          phoneDetails.ram,
          phoneDetails.storage,
          phoneDetails.phone_condition,
          phoneDetails.blocked_operator
        );
        setSmartphonePrice(phonePrice);
        // console.log("Prix du téléphone :", phonePrice);

        // Effectuez d'autres actions nécessaires après le calcul du prix
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form className="m-12 p-14 space-y-6">
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
            <option value="32">32</option>
            <option value="64">64</option>
            <option value="128">128</option>
            <option value="256">256</option>
            <option value="512">512</option>
            <option value="1000">1000</option>
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
      {smartphonePrice !== 0 && (
        <div className="flex justify-center">
          <h3 className="text-white font-semibold ">
            Voici une estimation du prix du produit : {smartphonePrice}€
          </h3>
        </div>
      )}
    </form>
  );
}

export default NouveauProd;

