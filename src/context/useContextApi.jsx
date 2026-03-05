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
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  function updatePersonalInfo(info) {
    setPersonalInfo((prevInfo) => ({ ...prevInfo, ...info }));
  }

  useEffect(() => {
    const { firstName, lastName, email, phone } = personalInfo;
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
    } else {
      setIsNextDisabled(true);
    }
  }, [personalInfo]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <DataContext.Provider
      value={{
        theme,
        personalInfo,
        isNextDisabled,
        toggleTheme,
        updatePersonalInfo,
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
