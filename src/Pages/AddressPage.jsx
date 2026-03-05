import React from "react";
import { useInput } from "../custom/useInput";
import { ADDRESS_INFO_DATA } from "../data/Data";
import { useContextApi } from "../context/useContextApi";
import InputField from "../components/Input/InputField";

function AddressPage() {
  const { addressInfo, updateAddressInfo } = useContextApi();

  const { handleInputChange } = useInput(updateAddressInfo);
  return (
    <>
      <h2>Address Information</h2>
      {ADDRESS_INFO_DATA.map((input) => (
        <InputField
          key={input.id}
          {...input}
          value={addressInfo[input.id]}
          onChange={(e) => handleInputChange(e, input.id)}
        />
      ))}
    </>
  );
}

export default AddressPage;
