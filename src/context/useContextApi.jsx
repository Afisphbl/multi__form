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
  personalInfo: { firstName: "", lastName: "", email: "", phone: "" },

  addressInfo: { country: "", city: "", street: "", zipcode: "" },

  paymentInfo: { cardHolderName: "", cardNumber: "", expiryDate: "", cvv: "" },

  step: 1,

  isNextDisabled: true,
};
const DataContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "updatePersonalInfo": {
      const updatedPersonalInfo = {
        ...state.personalInfo,
        ...action.payload,
      };

      return {
        ...state,
        personalInfo: updatedPersonalInfo,
      };
    }

    case "updateAddressInfo": {
      const updatedAddressInfo = {
        ...state.addressInfo,
        ...action.payload,
      };

      return {
        ...state,
        addressInfo: updatedAddressInfo,
      };
    }

    case "updatePaymentInfo": {
      const updatedPaymentInfo = {
        ...state.paymentInfo,
        ...action.payload,
      };

      return {
        ...state,
        paymentInfo: updatedPaymentInfo,
      };
    }

    case "goToNextStep":
      return {
        ...state,
        isNextDisabled: !state.isNextDisabled,
        step: state.step + 1,
      };

    case "goToPreviousStep":
      return {
        ...state,
        isNextDisabled: !state.isNextDisabled,
        step: state.step - 1,
      };

    case "disableNextButton":
      return {
        ...state,
        isNextDisabled: true,
      };

    case "enableNextButton":
      return {
        ...state,
        isNextDisabled: false,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function updatePersonalInfo(info) {
    dispatch({ type: "updatePersonalInfo", payload: info });
  }

  function updateAddressInfo(info) {
    dispatch({ type: "updateAddressInfo", payload: info });
  }

  function updatePaymentInfo(info) {
    dispatch({ type: "updatePaymentInfo", payload: info });
  }

  function goToNextStep() {
    dispatch({ type: "goToNextStep" });
  }

  const disableNextButton = useCallback(() => {
    dispatch({ type: "disableNextButton" });
  }, []);

  const enableNextButton = useCallback(() => {
    dispatch({ type: "enableNextButton" });
  }, []);

  function goToPreviousStep() {
    dispatch({ type: "goToPreviousStep" });
  }

  useData({
    state,
    disableNextButton,
    enableNextButton,
  });

  return (
    <DataContext.Provider
      value={{
        state,
        updatePersonalInfo,
        updateAddressInfo,
        updatePaymentInfo,
        goToNextStep,
        goToPreviousStep,
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
