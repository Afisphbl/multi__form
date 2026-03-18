import React from "react";
import { useContextApi } from "../context/useContextApi";
import "./Summary.css";

function Summary() {
  const {
    state: { personalInfo1, addressInfo1, paymentInfo1 },
  } = useContextApi();

  return (
    <div className="summary-content">
      <h2>Final Summary</h2>
      <div className="summary-section">
        <h3>Personal Information</h3>
        <p>
          <strong>Name:</strong> {personalInfo1.firstName}{" "}
          {personalInfo1.lastName}
        </p>
        <p>
          <strong>Email:</strong> {personalInfo1.email}
        </p>
        <p>
          <strong>Phone:</strong> {personalInfo1.phone}
        </p>
      </div>

      <div className="summary-section">
        <h3>Address Information</h3>
        <p>
          <strong>Country:</strong> {addressInfo1.country}
        </p>
        <p>
          <strong>City:</strong> {addressInfo1.city}
        </p>
        <p>
          <strong>Street:</strong> {addressInfo1.street}
        </p>
        <p>
          <strong>Zipcode:</strong> {addressInfo1.zipcode}
        </p>
      </div>

      <div className="summary-section">
        <h3>Payment Information</h3>
        <p>
          <strong>Card Holder Name:</strong> {paymentInfo1.cardHolderName}
        </p>
        <p>
          <strong>Card Number:</strong> **** **** ****{" "}
          {paymentInfo1.cardNumber.slice(-4)}
        </p>
        <p>
          <strong>Expiry Date:</strong> {paymentInfo1.expiryDate}
        </p>
      </div>
    </div>
  );
}

export default Summary;
