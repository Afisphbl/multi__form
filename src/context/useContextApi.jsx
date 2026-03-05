import React, {
  createContext,
  use,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext();
const PersonalInfoContext = createContext();

const DataContext = createContext();

const value = {
  themeContext: ThemeContext,
  personalInfoContext: PersonalInfoContext,
};

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
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
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  function updatePersonalInfo(info) {
    setPersonalInfo((prevInfo) => ({ ...prevInfo, ...info }));
  }

  function updateAddressInfo(info) {
    setAddressInfo((prevInfo) => ({ ...prevInfo, ...info }));
  }

  function toggleNextButton() {
    setIsNextDisabled((prevState) => !prevState);
  }

  function onBackButtonClicked() {
    setIsNextDisabled(false);
  }

  useEffect(() => {
    const { firstName, lastName, email, phone } = personalInfo;
    const { country, city, street, zipcode } = addressInfo;
    if (
      firstName &&
      firstName.length >= 3 &&
      lastName &&
      lastName.length >= 3 &&
      email &&
      email.includes("@") &&
      email.endsWith(".com") &&
      phone &&
      phone.length === 10 &&
      Number(phone)
    ) {
      setIsNextDisabled(false);
    } else if (country && city && street && zipcode && Number(zipcode)) {
      setIsNextDisabled(false);
    } else {
      setIsNextDisabled(true);
    }
  }, [personalInfo, addressInfo]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <DataContext.Provider
      value={{
        theme,
        personalInfo,
        addressInfo,
        isNextDisabled,
        toggleTheme,
        updatePersonalInfo,
        updateAddressInfo,
        toggleNextButton,
        onBackButtonClicked,
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
