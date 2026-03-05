import React from "react";
import { ADDRESS_INFO_DATA } from "../data/Data";
import { useContextApi } from "../context/useContextApi";
import InputField from "../components/Input/InputField";

function AddressPage() {
  const { addressInfo, updateAddressInfo } = useContextApi();

  function handleInputChange(e, id) {
    const { value } = e.target;
    updateAddressInfo({ [id]: value });
  }
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
