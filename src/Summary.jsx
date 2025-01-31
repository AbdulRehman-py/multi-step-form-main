import "./summary.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { planContext } from "./plancontext.jsx";
import { AddOnContext } from "./addOnContext.jsx";

const Summary = ({ goToPreviousPage, SubmitButton }) => {
  const { plandata } = useContext(planContext);
  const { addOns } = useContext(AddOnContext);

  return (
    <div className="Summary">
      <h1>Finishing up</h1>
      <p>Double-check if every Thing looks ok. before confirming</p>

      <div className="Summary__content">
        <div className="content">
          <div className="column">
            <span className="plan-choose">{plandata.tier}</span>
            <span className="change">change</span>
          </div>
          <span className="price-plan">{`${plandata.price}${plandata.monthly}`}</span>
        </div>
        <div className="add-content">
          <span>{addOns.onlineservice}</span>
          <span className="add-price">{addOns.onlinneprice}</span>
        </div>
        <div className="add-content">
          <span>{addOns.largerstorage}</span>
          <span className="add-price">{addOns.largerprice}</span>
        </div>
        <div className="add-content">
          <span>{addOns.customizableprofile}</span>
          <span className="add-price">{addOns.customizableprice}</span>
        </div>
      </div>

      <div className="total">
        <span>Total</span>
        <span>{"1$"}</span>
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
};

export default Summary;
