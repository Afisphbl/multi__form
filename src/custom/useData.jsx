import { useEffect } from "react";

export function useData({
  step,
  setIsNextDisabled,
  state: { personalInfo1, addressInfo1, paymentInfo1 },
}) {
  useEffect(() => {
    const { firstName, lastName, email, phone } = personalInfo1;
    const { country, city, street, zipcode } = addressInfo1;
    const { cardHolderName, cardNumber, expiryDate, cvv } = paymentInfo1;

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
  }, [step, personalInfo1, addressInfo1, paymentInfo1, setIsNextDisabled]);

  return { setIsNextDisabled, step };
}
