import "./App.css";
import { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { DataContext } from "./StatePersonal.jsx";

const Personal = ({ goToNextPage }) => {
  const { personalInfo, setPersonalInfo } = useContext(DataContext);

  const [errors, setErrors] = useState({
    name: { isValid: true, message: "" },
    email: { isValid: true, message: "" },
    phone: { isValid: true, message: "" }
  });

  const validateField = (value, type) => {
    const nameregex = /^[a-zA-Z]+([-'\s][a-zA-Z]+)*$/;
    const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneregex = /^(\+?\d{1,3}[-.\s]?)?\d{10}$/;

    switch (type) {
      case "name":
        if (!value.trim()) {
          return { isValid: false, message: "Name is required" };
        }
        if (!nameregex.test(value)) {
          return { isValid: false, message: "Please enter a valid name" };
        }
        return { isValid: true, message: "" };

      case "email":
        if (!value.trim()) {
          return { isValid: false, message: "Email is required" };
        }
        if (!emailregex.test(value)) {
          return { isValid: false, message: "Please enter a valid email address" };
        }
        return { isValid: true, message: "" };

      case "phone":
        if (!value.trim()) {
          return { isValid: false, message: "Phone number is required" };
        }
        if (!phoneregex.test(value)) {
          return { isValid: false, message: "Please enter a valid phone number" };
        }
        return { isValid: true, message: "" };

      default:
        return { isValid: true, message: "" };
    }
  };

  const handleInputChange = (e, field) => {
    const value = e.target.value;
    setPersonalInfo({ ...personalInfo, [field]: value });
    
    // Validate after a short delay to avoid too frequent validation
    const validation = validateField(value, field);
    setErrors(prev => ({
      ...prev,
      [field]: validation
    }));
  };

  const handleNextPage = () => {
    // Validate all fields
    const nameValidation = validateField(personalInfo.name, "name");
    const emailValidation = validateField(personalInfo.email, "email");
    const phoneValidation = validateField(personalInfo.phone, "phone");

    const newErrors = {
      name: nameValidation,
      email: emailValidation,
      phone: phoneValidation
    };

    setErrors(newErrors);

    if (nameValidation.isValid && emailValidation.isValid && phoneValidation.isValid) {
      goToNextPage();
    }
  };

  // Validate on initial load if there's saved data
  useEffect(() => {
    if (personalInfo.name || personalInfo.email || personalInfo.phone) {
      setErrors({
        name: validateField(personalInfo.name, "name"),
        email: validateField(personalInfo.email, "email"),
        phone: validateField(personalInfo.phone, "phone")
      });
    }
  }, []);

  return (
    <div className="personal-info">
      <h1>Personal Info</h1>
      <p>Please provide your name, email address, and phone number.</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="input-container">
          <div className="double-label">
            <label htmlFor="name">Name</label>
            <span 
              className="error" 
              style={{ 
                color: errors.name.isValid ? "transparent" : "red",
                visibility: errors.name.message ? "visible" : "hidden"
              }}
            >
              {errors.name.message}
            </span>
          </div>
          <input
            type="text"
            id="name"
            placeholder="eg. Roger Clark"
            value={personalInfo.name}
            onChange={(e) => handleInputChange(e, "name")}
            style={{
              border: errors.name.isValid ? "1px solid lightblue" : "1px solid red",
            }}
          />
        </div>
        <div className="input-container">
          <div className="email-label">
            <label htmlFor="email">Email Address</label>
            <span 
              className="error" 
              style={{ 
                color: errors.email.isValid ? "transparent" : "red",
                visibility: errors.email.message ? "visible" : "hidden"
              }}
            >
              {errors.email.message}
            </span>
          </div>
          <input
            type="email"
            id="email"
            placeholder="RogerClark@gmail.com"
            value={personalInfo.email}
            onChange={(e) => handleInputChange(e, "email")}
            style={{
              border: errors.email.isValid ? "1px solid lightblue" : "1px solid red",
            }}
          />
        </div>
        <div className="input-container">
          <div className="phone-label">
            <label htmlFor="phone">Phone Number</label>
            <span 
              className="error" 
              style={{ 
                color: errors.phone.isValid ? "transparent" : "red",
                visibility: errors.phone.message ? "visible" : "hidden"
              }}
            >
              {errors.phone.message}
            </span>
          </div>
          <input
            type="tel"
            id="phone"
            placeholder="eg. +1 301 525 987"
            value={personalInfo.phone}
            onChange={(e) => handleInputChange(e, "phone")}
            style={{
              border: errors.phone.isValid ? "1px solid lightblue" : "1px solid red",
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