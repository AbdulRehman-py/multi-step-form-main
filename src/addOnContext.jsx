import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

export const AddOnContext = createContext();

export const AddOnProvider = ({ children }) => {
  const [addOns, setAddOns] = useState(() => {
    const savedData = sessionStorage.getItem("addOns");
    return savedData ? JSON.parse(savedData) : {
      onlineservice: "",
      onlineprice: "",
      largerstorage: "",
      largerprice: "",
      customizableprofile: "",
      customizableprice: "",
    };
  });

  useEffect(() => {
    sessionStorage.setItem("addOns", JSON.stringify(addOns));
  }, [addOns]);

  const handleAddOns = (name, value, price) => {
    setAddOns((prevAddOns) => ({
      ...prevAddOns,
      [name]: value ? name : "",
      [`${name}price`]: value ? price : "",
    }));
  };

  return (
    <AddOnContext.Provider value={{ addOns, handleAddOns }}>
      {children}
    </AddOnContext.Provider>
  );
};

AddOnProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAddOns = () => useContext(AddOnContext);