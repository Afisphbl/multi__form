import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useContextApi } from "./context/useContextApi";
import ProgressBar from "./components/progressBar/ProgressBar";
import NavigationButtons from "./components/Navigation/NavigationButtons";
import PersonalPage from "./Pages/PersonalPage";
import AddressPage from "./Pages/AddressPage";
import PaymentPage from "./Pages/PaymentPage";
import Summary from "./Pages/Summary";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const {
    state: { step, isNextDisabled },
    goToNextStep,
    goToPreviousStep,
  } = useContextApi();
  const [isBackButtonVisible, setIsBackButtonVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/step-${step}`);

    setIsBackButtonVisible(step !== 1);
  }, [step, navigate]);

  return (
    <ThemeProvider>
      <article className="app-container">
        <main className="form-card">
          <ProgressBar />
          <Routes>
            <Route path="/step-1" element={<PersonalPage />} />
            <Route path="/step-2" element={<AddressPage />} />
            <Route path="/step-3" element={<PaymentPage />} />
            <Route path="/step-4" element={<Summary />} />
          </Routes>
          <NavigationButtons
            isBackButtonVisible={isBackButtonVisible}
            isNextDisabled={isNextDisabled}
            onNext={goToNextStep}
            onBack={goToPreviousStep}
            step={step}
          />
        </main>
      </article>
    </ThemeProvider>
  );
}

export default App;
