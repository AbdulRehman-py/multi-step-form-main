import "./App.css";
import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { DataContext } from "./StatePersonal.jsx";

const Personal = ({ goToNextPage }) => {
  const { personalInfo, setPersonalInfo } = useContext(DataContext);

  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPhone, setIsValidPhone] = useState(true);

  const validate = (value, type) => {
    const nameregex = /^[a-zA-Z]+([-'\s][a-zA-Z]+)*$/;
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneregex = /^(\+?\d{1,3}[-.\s]?)?\d{10}$/;

    if (type === "name") return nameregex.test(value);
    if (type === "email") return emailregex.test(value);
    if (type === "phone") return phoneregex.test(value);
    return false;
  };

  const handleNextPage = () => {
    const isValidName = validate(personalInfo.name, "name");
    const isValidEmail = validate(personalInfo.email, "email");
    const isValidPhone = validate(personalInfo.phone, "phone");

    setIsValidName(isValidName);
    setIsValidEmail(isValidEmail);
    setIsValidPhone(isValidPhone);

    if (isValidName && isValidEmail && isValidPhone) {
      goToNextPage();
    }
  };

  return (
    <div className="personal-info">
      <h1>Personal Info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <form>
        <div className="input-container">
          <div className="double-label">
            <label htmlFor="name">Name</label>
            <span className="error" style={{ color: isValidName ? "white" : "red" }}>invalid input name</span>
          </div>
          <input
            type="text"
            id="name"
            placeholder="eg. Roger Clark"
            value={personalInfo.name}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, name: e.target.value })
            }
            style={{
              border: isValidName ? "1px solid lightblue" : "1px solid red",
            }}
          />
        </div>
        <div className="input-container">
          <div className="email-label">
            <label htmlFor="email">Email Address</label>
            <span className="error" style={{ color: isValidEmail ? "white" : "red" }}>invalid input email</span>
          </div>
          <input
            type="email"
            id="email"
            placeholder="RogerClark@gmail.com"
            value={personalInfo.email}
            onChange={(e) => {
              setPersonalInfo({ ...personalInfo, email: e.target.value });
              setIsValidEmail(true); // Reset validation on change
            }}
            style={{
              border: isValidEmail ? "1px solid lightblue" : "1px solid red",
            }}
          />
        </div>
        <div className="input-container">
          <div className="phone-label">
            <label htmlFor="phone">Phone Number</label>
            <span className="error" style={{ color: isValidPhone ? "white" : "red" }}>invalid input phone</span>
          </div>
          <input
            type="tel"
            id="phone"
            placeholder="eg. +1 301 525 987"
            value={personalInfo.phone}
            onChange={(e) => {
              setPersonalInfo({ ...personalInfo, phone: e.target.value });
              setIsValidPhone(true); // Reset validation on change
            }}
            style={{
              border: isValidPhone ? "1px solid lightblue" : "1px solid red",
            }}
          />
        </div>
        <button className="button" type="button" onClick={handleNextPage}>
          Next
        </button>
      </form>
    </div>
  );
};

Personal.propTypes = {
  goToNextPage: PropTypes.func.isRequired,
};

export default Personal;