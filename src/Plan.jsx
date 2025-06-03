import "./plan.css";
import { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./ToggleSwitch.css";
import { planContext } from "./plancontext";
import iconArcade from '../assets/images/icon-arcade.svg';
import iconAdvanced from '../assets/images/icon-advanced.svg';
import iconPro from '../assets/images/icon-pro.svg';

const SelectPlan = ({ goToPreviousPage, goToNextPage }) => {
  const [isToggled, setIsToggled] = useState(() => {
    const savedToggle = sessionStorage.getItem("planToggle");
    return savedToggle ? JSON.parse(savedToggle) : false;
  });

  const { plandata, setPlandata } = useContext(planContext);

  // Save toggle state
  useEffect(() => {
    sessionStorage.setItem("planToggle", JSON.stringify(isToggled));
  }, [isToggled]);

  const getPriceForPlan = (basePriceMonthly) => {
    const yearlyPrice = basePriceMonthly * 12;
    return {
      price: isToggled ? `$${yearlyPrice}` : `$${basePriceMonthly}`,
      monthly: isToggled ? "/yr" : "/mo"
    };
  };

  const handleSelectPlan = (plan) => {
    setPlandata((prevPlan) => ({
      ...prevPlan,
      ...plan,
    }));
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
    // Update prices when toggling
    if (plandata.tier) {
      const basePrices = {
        arcade: 9,
        advanced: 12,
        pro: 15
      };
      const newPrice = getPriceForPlan(basePrices[plandata.tier]);
      setPlandata(prev => ({
        ...prev,
        ...newPrice
      }));
    }
  };

  const validateplan = () => {
    if (!plandata.tier) {
      alert("Please select a plan");
      return false;
    }
    goToNextPage();
    return true;
  };

  const getDisplayPrice = (basePrice) => {
    return isToggled ? `$${basePrice * 12}/yr` : `$${basePrice}/mo`;
  };

  return (
    <div className="plan-component">
      <h1>Select Plan</h1>
      <p>You have the option of monthly or yearly billing</p>
      <div className="plans">
        <article
          className={`plan plan1 ${plandata.tier === "arcade" ? "selected" : ""}`}
          onClick={() => {
            const priceInfo = getPriceForPlan(9);
            handleSelectPlan({
              tier: "arcade",
              ...priceInfo
            });
          }}
        >
          <img src={iconArcade} alt="arcade image" />
          <h3>arcade</h3>
          <div className="price-container">
            <small>{getDisplayPrice(9)}</small>
            {isToggled && <span className="yearly-bonus">2 months free</span>}
          </div>
        </article>
        <article
          className={`plan plan2 ${plandata.tier === "advanced" ? "selected" : ""}`}
          onClick={() => {
            const priceInfo = getPriceForPlan(12);
            handleSelectPlan({
              tier: "advanced",
              ...priceInfo
            });
          }}
        >
          <img src={iconAdvanced} alt="advanced plan image" />
          <h3>advanced</h3>
          <div className="price-container">
            <small>{getDisplayPrice(12)}</small>
            {isToggled && <span className="yearly-bonus">2 months free</span>}
          </div>
        </article>
        <article
          className={`plan plan3 ${plandata.tier === "pro" ? "selected" : ""}`}
          onClick={() => {
            const priceInfo = getPriceForPlan(15);
            handleSelectPlan({
              tier: "pro",
              ...priceInfo
            });
          }}
        >
          <img src={iconPro} alt="pro plan image" />
          <h3>pro</h3>
          <div className="price-container">
            <small>{getDisplayPrice(15)}</small>
            {isToggled && <span className="yearly-bonus">2 months free</span>}
          </div>
        </article>
      </div>
      <div className="monthly-yearly">
        <span className={!isToggled ? "active-period" : ""}>Monthly</span>
        <div className="toggle-switch" onClick={handleToggle}>
          <div className={`switch ${isToggled ? "toggled" : ""}`}></div>
        </div>
        <span className={isToggled ? "active-period" : ""}>Yearly</span>
      </div>
      <div className="navigation-buttons">
        <button className="go-back" onClick={goToPreviousPage}>
          Go Back
        </button>
        <button className="next-step" onClick={validateplan}>Next</button>
      </div>
    </div>
  );
};

SelectPlan.propTypes = {
  goToPreviousPage: PropTypes.func.isRequired,
  goToNextPage: PropTypes.func.isRequired,
};

export default SelectPlan;
