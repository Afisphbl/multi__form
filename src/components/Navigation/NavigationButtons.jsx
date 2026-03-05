import React from "react";
import Button from "../button/Button";
import "./NavigationButtons.css";

function NavigationButtons({ onNext, onBack, isVisible, isNextDisabled }) {
  return (
    <div className="navigation-buttons">
      <Button
        className="btn-back"
        onClick={onBack}
        style={{ visibility: isVisible ? "visible" : "hidden" }}
      >
        Back
      </Button>
      <Button className="btn-next" onClick={onNext} disabled={isNextDisabled}>
        Next
      </Button>
    </div>
  );
}

export default NavigationButtons;
