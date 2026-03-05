import { useEffect } from "react";

export function useData({
  step,
  setIsNextDisabled,
  personalInfo,
  addressInfo,
  paymentInfo,
}) {
  useEffect(() => {
    const { firstName, lastName, email, phone } = personalInfo;
    const { country, city, street, zipcode } = addressInfo;
    const { cardHolderName, cardNumber, expiryDate, cvv } = paymentInfo;

    if (step === 1) {
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
    } else if (step === 2) {
      if (country && city && street && zipcode && Number(zipcode)) {
        setIsNextDisabled(false);
      } else {
        setIsNextDisabled(true);
      }
    } else if (step === 3) {
      if (
        cardHolderName === `${firstName} ${lastName}` &&
        cardNumber &&
        cardNumber.length === 16 &&
        Number(cardNumber) &&
        expiryDate &&
        cvv &&
        cvv.length === 3 &&
        Number(cvv)
      ) {
        setIsNextDisabled(false);
      } else {
        setIsNextDisabled(true);
      }
    } else {
      setIsNextDisabled(true);
    }
  }, [step, personalInfo, addressInfo, paymentInfo, setIsNextDisabled]);

  return { setIsNextDisabled, step };
}
