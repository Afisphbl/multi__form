import React from "react";
import Button from "../button/Button";
import "./NavigationButtons.css";

function NavigationButtons({
  onNext,
  onBack,
  isBackButtonVisible,
  isNextDisabled,
  step,
}) {
  return (
    <div className="navigation-buttons">
      <Button
        className="btn-back"
        onClick={onBack}
        style={{ visibility: isBackButtonVisible ? "visible" : "hidden" }}
      >
        Back
      </Button>
      {step !== 4 && (
        <Button className="btn-next" onClick={onNext} disabled={isNextDisabled}>
          Next
        </Button>
      )}
    </div>
  );
}

export default NavigationButtons;
