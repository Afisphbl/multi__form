import { useEffect } from "react";

export function useData({
  step,
  onForwardHandler,
  onBackButtonClicked1,
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
        onBackButtonClicked1();
      } else {
        onForwardHandler();
      }
    } else if (step === 2) {
      if (country && city && street && zipcode && Number(zipcode)) {
        onBackButtonClicked1();
      } else {
        onForwardHandler();
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
        onBackButtonClicked1();
      } else {
        onForwardHandler();
      }
    } else {
      onForwardHandler();
    }
  }, [
    step,
    personalInfo1,
    addressInfo1,
    paymentInfo1,
    onForwardHandler,
    onBackButtonClicked1,
  ]);

  return { step };
}
