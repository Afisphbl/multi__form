import React from "react";
import { PAYMENT_INFO_DATA } from "../data/Data";
import { useContextApi } from "../context/useContextApi";
import InputField from "../components/Input/InputField";

function PaymentPage() {
  const { paymentInfo, updatePaymentInfo } = useContextApi();
  function handleInputChange(e, name) {
    const { value } = e.target;
    updatePaymentInfo({ [name]: value });
  }
  return (
    <>
      <h2>Payment Information</h2>
      {PAYMENT_INFO_DATA.map((input) => (
        <InputField
          key={input.id}
          {...input}
          value={paymentInfo[input.id]}
          onChange={(e) => handleInputChange(e, input.id)}
        />
      ))}
    </>
  );
}

export default PaymentPage;
