import React from "react";
import { ADDRESS_INFO_DATA } from "../data/Data";
import InputField from "../components/Input/InputField";

function AddressPage() {
  return (
    <>
      <h2>Address Information</h2>
      {ADDRESS_INFO_DATA.map((input) => (
        <InputField key={input.id} {...input} />
      ))}
    </>
  );
}

export default AddressPage;
