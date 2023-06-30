/* eslint-disable */ import { slide as Menu } from "react-burger-menu";
import { useNavigate } from "react-router-dom";
import "./Burger.css";
// import logo from "../assets/emmaus.svg";

function Burger() {
  const navigate = useNavigate();

  const toNouveauProduit = () => {
    navigate("/Nouveauproduit");
  };
  const handeClickDbList = () => {
    navigate("/DatabaseList");
  };

  return (
    <div className="">
      <Menu className="fixed inline-block bg-blue-500">
        <div>
          <button
            type="button"
            className="hover:bg-blue-600"
            onClick={toNouveauProduit}
          >
            Enregistrez un Nouveau Produit
          </button>

          <button type="button" onClick={handeClickDbList}>
            Consultez la base de données
          </button>
        </div>
      </Menu>
    </div>
  );
}
export default Burger;
