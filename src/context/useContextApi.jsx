import React, { createContext, useContext, useEffect, useState } from "react";

import { useData } from "../custom/useData";

const DataContext = createContext();

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) return JSON.parse(storedTheme);

    return "light";
  });
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [addressInfo, setAddressInfo] = useState({
    country: "",
    city: "",
    street: "",
    zipcode: "",
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardHolderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [step, setStep] = useState(1);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  function updatePersonalInfo(info) {
    setPersonalInfo((prevInfo) => ({ ...prevInfo, ...info }));
  }

  function updateAddressInfo(info) {
    setAddressInfo((prevInfo) => ({ ...prevInfo, ...info }));
  }

  function updatePaymentInfo(info) {
    setPaymentInfo((prevInfo) => ({ ...prevInfo, ...info }));
  }

  function toggleNextButton() {
    setIsNextDisabled((prevState) => !prevState);
  }

  function onBackButtonClicked() {
    setIsNextDisabled(false);
  }

  function onNextHandler() {
    setStep((prevStep) => prevStep + 1);
    toggleNextButton();
  }

  function onBackHandler() {
    setStep((prevStep) => prevStep - 1);
    onBackButtonClicked();
  }

  useData({
    step,
    setIsNextDisabled,
    personalInfo,
    addressInfo,
    paymentInfo,
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <DataContext.Provider
      value={{
        theme,
        personalInfo,
        addressInfo,
        paymentInfo,
        isNextDisabled,
        step,
        toggleTheme,
        updatePersonalInfo,
        updateAddressInfo,
        updatePaymentInfo,
        onNextHandler,
        onBackHandler,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useContextApi = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useContextApi must be used within a contextProvider");
  }

  return context;
};
