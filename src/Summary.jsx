import "./summary.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { planContext } from "./plancontext.jsx";
import { AddOnContext } from "./addOnContext.jsx";

const Summary = ({ goToPreviousPage, SubmitButton, changeplan }) => {
  const { plandata } = useContext(planContext);
  const { addOns } = useContext(AddOnContext);

  const extractNumericValue = (price) => {
    if (!price) return 0; // Return 0 if price is undefined or null
    const match = price.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };

  // Calculate the total price
  const totalPrice =
    extractNumericValue(plandata.price) +
    extractNumericValue(addOns.onlineserviceprice) +
    extractNumericValue(addOns.largerstorageprice) +
    extractNumericValue(addOns.customizableprofileprice);

  const mon_yr = plandata.monthly === "/mon" ? "mon" : "yr";

  const validtotalprice = mon_yr === "yr" ? totalPrice * 12 : totalPrice;

  return (
    <div className="Summary">
      <h1>Finishing up</h1>
      <p>Double-check if every Thing looks ok. before confirming</p>

      <div className="Summary__content">
        <div className="content">
          <div className="column">
            <span className="plan-choose">{plandata.tier}</span>
            <span className="change" onClick={changeplan}>
              change
            </span>
          </div>
          <span className="price-plan">{`${plandata.price}${plandata.monthly}`}</span>
        </div>
        <div className="add-content">
          <span>{addOns.onlineservice}</span>
          <span className="add-price">{addOns.onlineserviceprice}</span>
        </div>
        <div className="add-content">
          <span>{addOns.largerstorage}</span>
          <span className="add-price">{addOns.largerstorageprice}</span>
        </div>
        <div className="add-content">
          <span>{addOns.customizableprofile}</span>
          <span className="add-price">{addOns.customizableprofileprice}</span>
        </div>
      </div>

      <div className="total">
        <span>Total</span>
        <span>{`$${validtotalprice}/${mon_yr}`}</span>
      </div>
      <div className="confirm-button">
        <button onClick={goToPreviousPage}>go back</button>
        <button onClick={SubmitButton}>Confirm</button>
      </div>
    </div>
  );
};
Summary.propTypes = {
  goToPreviousPage: PropTypes.func.isRequired,
  SubmitButton: PropTypes.func.isRequired,
  changeplan: PropTypes.func.isRequired,
};

export default Summary;
