import './plan.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './ToggleSwitch.css';



const SelectPlan = ({goToPreviousPage,goToNextPage}) => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
                <div className='plan-component'>
                    <h1>Select Plan</h1>
                    <p>You have the option of monthly or yearly billing</p>
                    <div className="plans">
                        <div className="plan plan1">
                            <img src="assets/images/icon-arcade.svg" alt="arcade image" />
                            <h3>arcade</h3>
                            <small>$9/mo</small>
                        </div>
                        <div className="plan plan2">
                            <img src="assets/images/icon-advanced.svg" alt="advanced plan image" />
                            <h3>advanced</h3>
                            <small>$12/mo</small>
                        </div>
                        <div className="plan plan3">
                            <img src="assets/images/icon-pro.svg" alt="pro plan image" />
                            <h3>pro</h3>
                            <small>$15/mo</small>
                        </div>
                    </div>
                    <div className='monthly-yearly'>
                            Monthly 
                            <div className="toggle-switch" onClick={handleToggle}>
                                <div className={`switch ${isToggled ? 'toggled' : ''}`}></div>
                            </div>
                            Yearly
                        </div>
                    <div className='navigation-buttons'>
                        <button className='back' onClick={goToPreviousPage}>Go Back</button>
                        <button onClick={goToNextPage} >Next</button>
                    </div>
                </div>
    );
};
SelectPlan.propTypes = {
    goToPreviousPage: PropTypes.func.isRequired,
    goToNextPage: PropTypes.func.isRequired,
};

export default SelectPlan;
