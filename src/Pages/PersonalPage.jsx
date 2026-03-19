import React from "react";
import { useInput } from "../custom/useInput";
import { PERSONAL_INFO_FIELDS } from "../data/Data";
import { useContextApi } from "../context/useContextApi";
import InputField from "../components/Input/InputField";

function PersonalPage() {
  const {
    state: { personalInfo },
    updatePersonalInfo,
  } = useContextApi();
  const { handleInputChange } = useInput(updatePersonalInfo);

  return (
    <>
      <h2>Personal Information</h2>
      {PERSONAL_INFO_FIELDS.map((field) => (
        <InputField
          key={field.id}
          {...field}
          value={personalInfo[field.id]}
          onChange={(event) => handleInputChange(event, field.id)}
        />
      ))}
    </>
  );
}

export default PersonalPage;
