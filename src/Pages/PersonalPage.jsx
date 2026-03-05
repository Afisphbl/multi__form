import Data from "../data/Data";
import { useContextApi } from "../context/useContextApi";
import InputField from "../components/Input/InputField";

function PersonalPage() {
  const { personalInfo, updatePersonalInfo } = useContextApi();

  return (
    <>
      <h2>Personal Information</h2>
      {Data[0].map((input) => (
        <InputField
          key={input.id}
          {...input}
          value={personalInfo[input.id]}
          onChange={(e) => updatePersonalInfo({ [input.id]: e.target.value })}
        />
      ))}
    </>
  );
}

export default PersonalPage;
