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

  // Define add-on options
  const addOnOptions = [
    { name: "onlineservice", displayName: "Online Service", priceKey: "onlineserviceprice" },
    { name: "largerstorage", displayName: "Larger Storage", priceKey: "largerstorageprice" },
    { name: "customizableprofile", displayName: "Customizable Profile", priceKey: "customizableprofileprice" },
  ];

  // Calculate the total price
  const totalPrice = extractNumericValue(plandata.price) + addOnOptions.reduce((acc, addOn) => acc + extractNumericValue(addOns[addOn.priceKey]), 0);

  const mon_yr = plandata.monthly === "/mon" ? "mon" : "yr";
  const validtotalprice = mon_yr === "yr" ? totalPrice * 12 : totalPrice;
  const show_mon_yr = mon_yr === "mon" ? "(monthly)" : "(yearly)";

  return (
    <div className="Summary">
      <h1>Finishing up</h1>
      <p>Double-check if everything looks ok before confirming</p>

      <div className="Summary__content">
        <div className="content">
          <div className="column">
            <span className="plan-choose">{`${plandata.tier} ${show_mon_yr}`}</span>
            <span className="change" onClick={changeplan}>
              change
            </span>
          </div>
          <span className="price-plan">{`${plandata.price}${plandata.monthly}`}</span>
        </div>
        {addOnOptions.map((addOn) => (
          addOns[addOn.name] && (
            <div className="add-content" key={addOn.name}>
              <span>{addOn.displayName}</span>
              <span className="add-price">{addOns[addOn.priceKey]}</span>
            </div>
          )
        ))}
      </div>

      <div className="total">
        <span>{`Total ${show_mon_yr}`}</span>
        <span className="total-price">{`$${validtotalprice}/${mon_yr}`}</span>
      </div>
      <div className="confirm-button">
        <button className="go-back" onClick={goToPreviousPage}>Go back</button>
        <button className="next-step" onClick={SubmitButton}>Confirm</button>
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