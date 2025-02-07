import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';

export const planContext = createContext();

export const PlanProvider = ({ children }) => {
  const [plandata, setPlandata] = useState(() => {
    const savedData = sessionStorage.getItem("plandata");
    return savedData ? JSON.parse(savedData) : {
      tier: "",
      price: "",
      monthly: "",
    };
  });

  useEffect(() => {
    sessionStorage.setItem("plandata", JSON.stringify(plandata));
  }, [plandata]);

  return (
    <planContext.Provider value={{ plandata, setPlandata }}>
      {children}
    </planContext.Provider>
  );
};

PlanProvider.propTypes = {
  children: PropTypes.node.isRequired,
};