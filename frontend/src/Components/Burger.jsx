import { slide as Menu } from "react-burger-menu";
import { useNavigate } from "react-router-dom";
import "./Burger.css";

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
      <Menu className="fixed inline-block bg-grey ">
        <div>
          <button type="button" onClick={toNouveauProduit}>
            Novueau Produit
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
