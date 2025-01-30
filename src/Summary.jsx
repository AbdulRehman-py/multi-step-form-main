import "./summary.css";
import PropTypes from "prop-types";
import { useContext } from "react";
import { planContext } from "./plancontext.jsx";

const Summary = ({ goToPreviousPage, SubmitButton }) => {
  const { plandata } = useContext(planContext);

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
          <span>Online Service</span>
          <span className="add-price">{"9$"}</span>
        </div>
        <div className="add-content">
          <span>Larger Storage</span>
          <span className="add-price">{"2$"}</span>
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
