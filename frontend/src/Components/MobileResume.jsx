import React from "react";
import PropTypes from "prop-types";

function MobileResume(props) {
  const { smartphonePrice, phoneDetails } = props;

  // console.log(`${smartphonePrice} de la page resume`);
  // console.log({ phoneDetails });
  return (
    <div>
      PAGE RESUME
      <h2>{smartphonePrice} de la page resume</h2>
      <h3>{phoneDetails} phone details pr l'instant</h3>
    </div>
  );
}

export default MobileResume;

MobileResume.propTypes = {
  smartphonePrice: PropTypes.number.isRequired,
  phoneDetails: PropTypes.arrayOf(
    PropTypes.shape({
      product_id: PropTypes.string.isRequired,
      phone_img: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      phone_condition: PropTypes.string.isRequired,
      network: PropTypes.string.isRequired,
      blocked_operator: PropTypes.string,
    })
  ).isRequired,
};
