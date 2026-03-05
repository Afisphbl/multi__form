import React from "react";
import { PAYMENT_INFO_DATA } from "../data/Data";
import { useContextApi } from "../context/useContextApi";
import InputField from "../components/Input/InputField";

function PaymentPage() {
  return (
    <>
      <h2>Payment Information</h2>
      {PAYMENT_INFO_DATA.map((input) => (
        <InputField key={input.id} {...input} />
      ))}
    </>
  );
}

export default PaymentPage;
