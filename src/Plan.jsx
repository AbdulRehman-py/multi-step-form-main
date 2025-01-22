import './plan.css';
import { useState } from 'react';
import './ToggleSwitch.css';



const SelectPLan = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [page, setpage] = useState(0);

    const click = () => {
        setpage(1);
        if(page === 1){
            setpage(2);
        }
    };

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
    return (
        <div className='plan-component'>
            <h1>Select Plan</h1>
            <p>You have the option of montly or yearly billing</p>
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
            <button className='back' onClick={click}>go back</button>
            <button>Next</button>
      </div>
        </div>
    )
}

export default SelectPLan;