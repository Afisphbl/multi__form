import { useEffect } from "react";

export function useData({
  disableNextButton,
  enableNextButton,
  state: { personalInfo, addressInfo, paymentInfo, step },
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
        enableNextButton();
      } else {
        disableNextButton();
      }
    } else if (step === 2) {
      if (country && city && street && zipcode && Number(zipcode)) {
        enableNextButton();
      } else {
        disableNextButton();
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
        enableNextButton();
      } else {
        disableNextButton();
      }
    } else {
      disableNextButton();
    }
  }, [
    step,
    personalInfo,
    addressInfo,
    paymentInfo,
    disableNextButton,
    enableNextButton,
  ]);

  return { state: { personalInfo, addressInfo, paymentInfo, step } };
}
