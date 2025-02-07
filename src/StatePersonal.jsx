import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState(() => {
    const savedData = sessionStorage.getItem("personalInfo");
    return savedData ? JSON.parse(savedData) : { name: "", email: "", phone: "" };
  });

  useEffect(() => {
    sessionStorage.setItem("personalInfo", JSON.stringify(personalInfo));
  }, [personalInfo]);

  return (
    <DataContext.Provider value={{ personalInfo, setPersonalInfo }}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};