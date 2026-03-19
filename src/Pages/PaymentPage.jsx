import React from "react";
import { useInput } from "../custom/useInput";
import { PAYMENT_FIELDS } from "../data/Data";
import { useContextApi } from "../context/useContextApi";
import InputField from "../components/Input/InputField";

function PaymentPage() {
  const {
    state: { paymentInfo },
    updatePaymentInfo,
  } = useContextApi();
  const { handleInputChange } = useInput(updatePaymentInfo);
  return (
    <>
      <h2>Payment Information</h2>
      {PAYMENT_FIELDS.map((field) => (
        <InputField
          key={field.id}
          {...field}
          value={paymentInfo[field.id]}
          onChange={(event) => handleInputChange(event, field.id)}
        />
      ))}
    </>
  );
}

export default PaymentPage;
