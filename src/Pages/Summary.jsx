import React from "react";
import { useContextApi } from "../context/useContextApi";
import "./Summary.css";

function Summary() {
  const {
    state: { personalInfo, addressInfo, paymentInfo },
  } = useContextApi();

  return (
    <div className="summary-content">
      <h2>Final Summary</h2>
      <div className="summary-section">
        <h3>Personal Information</h3>
        <p>
          <strong>Name:</strong> {personalInfo.firstName}{" "}
          {personalInfo.lastName}
        </p>
        <p>
          <strong>Email:</strong> {personalInfo.email}
        </p>
        <p>
          <strong>Phone:</strong> {personalInfo.phone}
        </p>
      </div>

      <div className="summary-section">
        <h3>Address Information</h3>
        <p>
          <strong>Country:</strong> {addressInfo.country}
        </p>
        <p>
          <strong>City:</strong> {addressInfo.city}
        </p>
        <p>
          <strong>Street:</strong> {addressInfo.street}
        </p>
        <p>
          <strong>Zipcode:</strong> {addressInfo.zipcode}
        </p>
      </div>

      <div className="summary-section">
        <h3>Payment Information</h3>
        <p>
          <strong>Card Holder Name:</strong> {paymentInfo.cardHolderName}
        </p>
        <p>
          <strong>Card Number:</strong> **** **** ****{" "}
          {paymentInfo.cardNumber.slice(-4)}
        </p>
        <p>
          <strong>Expiry Date:</strong> {paymentInfo.expiryDate}
        </p>
      </div>
    </div>
  );
}

export default Summary;
