import "./App.css";
import { useState } from "react";
import PropTypes from 'prop-types';

const Personal = ({ goToNextPage }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);

  const validate = (value, type) => {
    const nameregex = /^[a-zA-Z]+([-'\s][a-zA-Z]+)*$/;
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneregex = /^\d{10,11}$/;

    if (type === "name") return nameregex.test(value);
    if (type === "email") return emailregex.test(value);
    if (type === "phone") return phoneregex.test(value);
    return false;
  };

  const handleNextPage = () => {
    const isValidName = validate(name, "name");
    const isValidEmail = validate(email, "email");
    const isValidPhone = validate(phone, "phone");

    setIsValidName(isValidName);
    setIsValidEmail(isValidEmail);
    setIsValidPhone(isValidPhone);

    if (isValidName && isValidEmail && isValidPhone) {
      goToNextPage();
    } else {
      // Highlight the invalid inputs
    }
  };

  return (
    <>
      <div className="personal-info">
        <h1>Personal Info</h1>
        <p>Please provide your name, email address, and phone number.</p>
        <form>
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="eg. Roger Clark"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setIsValidName(true); // Reset validation on change
              }}
              style={{
                border: isValidName ? '1px solid black' : '1px solid red',
              }}
            />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="RogerClark@gmail.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setIsValidEmail(true); // Reset validation on change
              }}
              style={{
                border: isValidEmail ? '1px solid black' : '1px solid red',
              }}
            />
          </div>
          <div className="input-container">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              id="phone"
              placeholder="eg. +1 301 525 987"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setIsValidPhone(true); // Reset validation on change
              }}
              style={{
                border: isValidPhone ? '1px solid black' : '1px solid red',
              }}
            />
          </div>
          <button type="button" onClick={handleNextPage}>Next</button>
        </form>
      </div>
    </>
  );
};

Personal.propTypes = {
  goToNextPage: PropTypes.func.isRequired,
};

export default Personal;
