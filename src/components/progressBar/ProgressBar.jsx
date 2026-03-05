import React from "react";
import ToggleTheme from "../toggleTheme/ToggleTheme";
import "./ProgressBar.css";

function ProgressBar() {
  return (
    <section className="progress-container">
      <ToggleTheme />
      <div className="progress-bar-wrapper">
        <div style={{ width: "25%" }} className="progress-bar-fill"></div>
      </div>

      <div className="steps-labels">
        <div className="step-label active">
          <span className="step-number">1</span>
          <span>Personal</span>
        </div>

        <div className="step-label">
          <span className="step-number">2</span>
          <span>Address</span>
        </div>
        <div className="step-label">
          <span className="step-number">3</span>
          <span>Payment</span>
        </div>
        <div className="step-label">
          <span className="step-number">4</span>
          <span>Summary</span>
        </div>
      </div>
    </section>
  );
}

export default ProgressBar;
