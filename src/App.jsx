import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useContextApi } from "./context/useContextApi";
import ProgressBar from "./components/progressBar/ProgressBar";
import NavigationButtons from "./components/Navigation/NavigationButtons";
import PersonalPage from "./Pages/PersonalPage";
import AddressPage from "./Pages/AddressPage";

function App() {
  const { isNextDisabled, toggleNextButton, onBackButtonClicked } =
    useContextApi();
  const [step, setStep] = useState(1);
  const [isBackVisible, setIsBackVisible] = useState(false);
  const navigate = useNavigate();

  function onNextHandler() {
    setStep((prevStep) => prevStep + 1);
    toggleNextButton();
  }

  function onBackHandler() {
    setStep((prevStep) => prevStep - 1);
    onBackButtonClicked();
  }

  useEffect(() => {
    navigate(`/step-${step}`);

    step === 1 ? setIsBackVisible(false) : setIsBackVisible(true);
  }, [step, navigate]);

  return (
    <article className="app-container">
      <main className="form-card">
        <ProgressBar />
        <Routes>
          <Route path="/step-1" element={<PersonalPage />} />
          <Route path="/step-2" element={<AddressPage />} />
        </Routes>
        <NavigationButtons
          isVisible={isBackVisible}
          isNextDisabled={isNextDisabled}
          onNext={onNextHandler}
          onBack={onBackHandler}
        />
      </main>
    </article>
  );
}

export default App;
