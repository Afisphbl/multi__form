import Data from "../data/Data";
import InputField from "../components/Input/InputField";

function PersonalPage() {
  return (
    <>
      <h2>Personal Information</h2>
      {Data[0].map((input) => (
        <InputField key={input.id} {...input} />
      ))}
    </>
  );
}

export default PersonalPage;
