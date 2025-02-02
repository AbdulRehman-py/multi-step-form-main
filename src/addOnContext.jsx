import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

export const AddOnContext = createContext();

export const AddOnProvider = ({ children }) => {
  const [addOns, setAddOns] = useState({
    onlineservice: "",
    onlineprice: "",
    largerstorage: "",
    largerprice: "",
    customizableprofile: "",
    customizableprice: "",
  });

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
