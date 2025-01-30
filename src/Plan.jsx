import "./plan.css";
import { useContext, useState } from "react";
import PropTypes from "prop-types";
import "./ToggleSwitch.css";
import { planContext } from "./plancontext";

const SelectPlan = ({ goToPreviousPage, goToNextPage }) => {
  const [isToggled, setIsToggled] = useState(false);

  const { plandata, setPlandata } = useContext(planContext);

  const handleSelectPlan = (plan) => {
    setPlandata((prevPlan) => ({
      ...prevPlan,
      ...plan,
    }));
  };

  console.log(plandata);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="plan-component">
      <h1>Select Plan</h1>
      <p>You have the option of monthly or yearly billing</p>
      <div className="plans">
        <article
          className="plan plan1"
          onClick={() => {
            alert("click 1");
            handleSelectPlan({
              tier: "arcade",
              price: "9$",
              monthly: isToggled ? "yearly" : "/mon",
            });
          }}
        >
          <img src="assets/images/icon-arcade.svg" alt="arcade image" />
          <h3>arcade</h3>
          <small>$9/mo</small>
        </article>
        <article
          className="plan plan2"
          onClick={() => {
            alert("click 2");
            handleSelectPlan({
              tier: "advanced",
              price: "12$",
              monthly: isToggled ? "yearly" : "/mon",
            });
          }}
        >
          <img
            src="assets/images/icon-advanced.svg"
            alt="advanced plan image"
          />
          <h3>advanced</h3>
          <small>$12/mo</small>
        </article>
        <article
          className="plan plan3"
          onClick={() => {
            alert("click 3");
            handleSelectPlan({
              tier: "pro",
              price: "15",
              monthly: isToggled ? "yearly" : "/mon",
            });
          }}
        >
          <img src="assets/images/icon-pro.svg" alt="pro plan image" />
          <h3>pro</h3>
          <small>$15/mo</small>
        </article>
      </div>
      <div className="monthly-yearly">
        Monthly
        <div className="toggle-switch" onClick={handleToggle}>
          <div className={`switch ${isToggled ? "toggled" : ""}`}></div>
        </div>
        Yearly
      </div>
      <div className="navigation-buttons">
        <button className="back" onClick={goToPreviousPage}>
          Go Back
        </button>
        <button onClick={goToNextPage}>Next</button>
      </div>
    </div>
  );
};
SelectPlan.propTypes = {
  goToPreviousPage: PropTypes.func.isRequired,
  goToNextPage: PropTypes.func.isRequired,
};

export default SelectPlan;
