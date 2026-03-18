import React from "react";
import { useInput } from "../custom/useInput";
import { PAYMENT_INFO_DATA } from "../data/Data";
import { useContextApi } from "../context/useContextApi";
import InputField from "../components/Input/InputField";

function PaymentPage() {
  const {
    state: { paymentInfo1 },
    updatePaymentInfo,
  } = useContextApi();
  const { handleInputChange } = useInput(updatePaymentInfo);
  return (
    <>
      <h2>Payment Information</h2>
      {PAYMENT_INFO_DATA.map((input) => (
        <InputField
          key={input.id}
          {...input}
          value={paymentInfo1[input.id]}
          onChange={(e) => handleInputChange(e, input.id)}
        />
      ))}
    </>
  );
}

export default PaymentPage;
