import './add-on.css';
import PropTypes from 'prop-types';


const AddOn = ({goToNextPage,goToPreviousPage }) => {
  return (
    <div className="add-on-container">
      <h1>Pick Add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="add-ons">
        <div className="add-on">
          <input type="checkbox" id="online-service" />
          <label htmlFor="online-service">
            <div className="text-content">
              <span className="title">Online service</span>
              <span className="description">Access to multiplayer games</span>
            </div>
            <span className="price">+$1/mo</span>
          </label>
        </div>
        <div className="add-on">
          <input type="checkbox" id="larger-storage" />
          <label htmlFor="larger-storage">
            <div className="text-content">
              <span className="title">Larger storage</span>
              <span className="description">Extra 1TB of cloud save</span>
            </div>
            <span className="price">+$2/mo</span>
          </label>
        </div>
        <div className="add-on">
          <input type="checkbox" id="customizable-profile" />
          <label htmlFor="customizable-profile">
            <div className="text-content">
              <span className="title">Customizable Profile</span>
              <span className="description">Custom theme on your profile</span>
            </div>
            <span className="price">+$2/mo</span>
          </label>
        </div>
      </div>
      <div className="navigation-buttons">
        <button className="go-back" onClick={goToPreviousPage}>Go Back</button>
        <button className="next-step" onClick={goToNextPage}>Next Step</button>
      </div>
    </div>
  );
};
AddOn.propTypes = {
  goToNextPage: PropTypes.func.isRequired,
  goToPreviousPage: PropTypes.func.isRequired,
};

export default AddOn;
