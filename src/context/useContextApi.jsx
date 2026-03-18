import React, {
  createContext,
  use,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

import { useData } from "../custom/useData";

const initialState = {
  personalInfo1: { firstName: "", lastName: "", email: "", phone: "" },

  addressInfo1: { country: "", city: "", street: "", zipcode: "" },

  paymentInfo1: { cardHolderName: "", cardNumber: "", expiryDate: "", cvv: "" },
};
const DataContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "personalInfo":
      return {
        ...state,
        personalInfo1: {
          ...state.personalInfo1,
          ...action.payload,
        },
      };

    case "addressInfo":
      return {
        ...state,
        addressInfo1: {
          ...state.addressInfo1,
          ...action.payload,
        },
      };

    case "paymentInfo":
      return {
        ...state,
        paymentInfo1: {
          ...state.paymentInfo1,
          ...action.payload,
        },
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) return JSON.parse(storedTheme);

    return "light";
  });

  const [state, dispatch] = useReducer(reducer, initialState);
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [step, setStep] = useState(1);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  function updatePersonalInfo(info) {
    dispatch({ type: "personalInfo", payload: info });
  }

  function updateAddressInfo(info) {
    dispatch({ type: "addressInfo", payload: info });
  }

  function updatePaymentInfo(info) {
    dispatch({ type: "paymentInfo", payload: info });
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
    state,
    setIsNextDisabled,
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <DataContext.Provider
      value={{
        theme,
        isNextDisabled,
        step,
        state,
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
