import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const planContext = createContext();


export const PlanProvider = ({children}) => {

    const [plandata, setPlandata] = useState({
        tier: "",
        price: "",
        monthly: "",     
    });


    return (
        <planContext.Provider value={{plandata, setPlandata}}>
            {children}
        </planContext.Provider>
    );
}

PlanProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
