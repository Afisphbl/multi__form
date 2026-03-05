import React from "react";
import { useContextApi } from "../../context/useContextApi";
import ToggleTheme from "../toggleTheme/ToggleTheme";
import "./ProgressBar.css";

function ProgressBar() {
  const { step } = useContextApi();
  const widthLength = 25 * step;
  return (
    <section className="progress-container">
      <ToggleTheme />
      <div className="progress-bar-wrapper">
        <div
          style={{ width: `${widthLength}%` }}
          className="progress-bar-fill"
        ></div>
      </div>

      <div className="steps-labels">
        <div className="step-label active">
          <span className="step-number">1</span>
          <span>Personal</span>
        </div>

        <div className={`step-label ${step >= 2 && "active"}`}>
          <span className="step-number">2</span>
          <span>Address</span>
        </div>
        <div className={`step-label ${step >= 3 && "active"}`}>
          <span className="step-number">3</span>
          <span>Payment</span>
        </div>
        <div className={`step-label ${step === 4 && "active"}`}>
          <span className="step-number">4</span>
          <span>Summary</span>
        </div>
      </div>
    </section>
  );
}

export default ProgressBar;
