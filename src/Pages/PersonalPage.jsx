import React from "react";
import { useInput } from "../custom/useInput";
import { PersonalInfoData } from "../data/Data";
import { useContextApi } from "../context/useContextApi";
import InputField from "../components/Input/InputField";

function PersonalPage() {
  const { personalInfo, updatePersonalInfo } = useContextApi();
  const { handleInputChange } = useInput(updatePersonalInfo);

  return (
    <>
      <h2>Personal Information</h2>
      {PersonalInfoData.map((input) => (
        <InputField
          key={input.id}
          {...input}
          value={personalInfo[input.id]}
          onChange={(e) => handleInputChange(e, input.id)}
        />
      ))}
    </>
  );
}

export default PersonalPage;
