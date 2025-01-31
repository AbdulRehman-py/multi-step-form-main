import { createContext } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';


export const AddOnContext = createContext();


export const AddOnProvider = ({ children }) => {
    const [addOns, setAddOns] = useState({
        onlineservice: "",
        onlineprice: "",
        largerstorage: "",
        largerprice: "",
        customizableprofile: "",
        customizableprice: "",
    })

    return (
        <AddOnContext.Provider value={{ addOns, setAddOns }}>
            {children}
        </AddOnContext.Provider>
    )
};

AddOnProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
