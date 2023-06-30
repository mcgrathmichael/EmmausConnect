import React, { useState } from "react";

import "./Login.css";

function Login() {
  const [formAuthentification, setFormAuthentification] = useState({
    email: "",
    pwd: "",
    role: "administrateur",
  });

  const [logged, setLogged] = useState(false);

  const handleChangeFormAuthentification = (evt) => {
    const { name, value } = evt.target;

    setFormAuthentification((prevState) => ({
      ...prevState,
      [name === "pwd" ? "pwd" : name]: value,
    }));
  };

  const handleClick = (event) => {
    event.preventDefault();
    setLogged(true);
  };

  return (
    <>
      {!logged && (
        <div className="form-global">
          <h2>Entrez vos identifiants</h2>
          <form className="form">
            <div className="label-input">
              <label htmlFor="email">Email :</label>
              <input
                type="email"
                name="email"
                placeholder="johndoe@gmail.fr"
                value={formAuthentification.email}
                onChange={handleChangeFormAuthentification}
                required
              />

              <label htmlFor="password">Mot de passe :</label>
              <input
                type="password"
                name="pwd"
                value={formAuthentification.pwd}
                placeholder="Votre mot de passe"
                onChange={handleChangeFormAuthentification}
                required
              />
            </div>
            <button
              className="bg-blue-600 text-white hover:bg-blue-700"
              type="submit"
              onClick={handleClick}
            >
              VALIDER
            </button>
          </form>
        </div>
      )}

      {logged && (
        // Utilisez une condition pour afficher le message de bienvenue si logged est true
        <div>
          <h3 className="text-green-500 mt-10 text-lg font-semibold flex justify-center">
            Bienvenue Admin !
          </h3>
        </div>
      )}
    </>
  );
}

export default Login;
