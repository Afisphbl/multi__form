import React from "react";
import { useInput } from "../custom/useInput";
import { ADDRESS_FIELDS } from "../data/Data";
import { useContextApi } from "../context/useContextApi";
import InputField from "../components/Input/InputField";

function AddressPage() {
  const {
    state: { addressInfo },
    updateAddressInfo,
  } = useContextApi();

  const { handleInputChange } = useInput(updateAddressInfo);
  return (
    <>
      <h2>Address Information</h2>
      {ADDRESS_FIELDS.map((field) => (
        <InputField
          key={field.id}
          {...field}
          value={addressInfo[field.id]}
          onChange={(event) => handleInputChange(event, field.id)}
        />
      ))}
    </>
  );
}

export default AddressPage;
