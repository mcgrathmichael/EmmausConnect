import React from "react";
import "./Login.css";

function Login() {
  const handleClick = (e) => {
    e.preventdefault();
  };

  return (
    <div className="form-global">
      <h2>Page de Connexion</h2>
      <form className="form" onSubmit={handleClick}>
        <div className="label-input">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            value=""
            placeholder="votre adresse email"
            onChange=""
            required
          />

          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            name="password"
            value=""
            placeholder="votre mon de passe"
            onChange=""
            required
          />
        </div>
        <button
          className="bg-blue-600 text-white hover:bg-blue-700 "
          type="submit"
        >
          VALIDER
        </button>
      </form>
    </div>
  );
}

export default Login;
