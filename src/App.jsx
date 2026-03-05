import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ContextProvider, useContextApi } from "./context/useContextApi";
import ProgressBar from "./components/progressBar/ProgressBar";
import NavigationButtons from "./components/Navigation/NavigationButtons";
import PersonalPage from "./Pages/PersonalPage";

function App() {
  const { isNextDisabled } = useContextApi();
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/step-1");
  }, [navigate]);

  return (
    <article className="app-container">
      <main className="form-card">
        <ProgressBar />
        <Routes>
          <Route path="/step-1" element={<PersonalPage />} />
        </Routes>

        <NavigationButtons isVisible={false} isNextDisabled={isNextDisabled} />
      </main>
    </article>
  );
}

export default App;
