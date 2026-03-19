import React, {
  createContext,
  useCallback,
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

  isNextDisabled: true,
};
const DataContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "personalInfo": {
      const updatedPersonalInfo = {
        ...state.personalInfo1,
        ...action.payload,
      };

      return {
        ...state,
        personalInfo1: updatedPersonalInfo,
      };
    }

    case "addressInfo": {
      const updatedAddressInfo = {
        ...state.addressInfo1,
        ...action.payload,
      };

      return {
        ...state,
        addressInfo1: updatedAddressInfo,
      };
    }

    case "paymentInfo": {
      const updatedPaymentInfo = {
        ...state.paymentInfo1,
        ...action.payload,
      };

      return {
        ...state,
        paymentInfo1: updatedPaymentInfo,
      };
    }

    case "toggleNextButton":
      return {
        ...state,
        isNextDisabled: !state.isNextDisabled,
      };

    case "nextButton":
      return {
        ...state,
        isNextDisabled: true,
      };

    case "backButton":
      return {
        ...state,
        isNextDisabled: false,
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

  function onNextHandler() {
    setStep((prevStep) => prevStep + 1);
    dispatch({ type: "toggleNextButton" });
  }

  const onForwardHandler = useCallback(() => {
    dispatch({ type: "nextButton" });
  }, []);

  const onBackButtonClicked1 = useCallback(() => {
    dispatch({ type: "backButton" });
  }, []);

  function onBackHandler() {
    setStep((prevStep) => prevStep - 1);
    dispatch({ type: "toggleNextButton" });
  }

  useData({
    step,
    state,
    onForwardHandler,
    onBackButtonClicked1,
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <DataContext.Provider
      value={{
        theme,
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
