const PERSONAL_INFO_FIELDS = [
  {
    id: "firstName",
    label: "First Name",
    placeholder: "Enter your first name",
    title: "First name should be at least 3 characters long",
    required: true,
  },
  {
    id: "lastName",
    label: "Last Name",
    placeholder: "Enter your last name",
    title: "Last name should be at least 3 characters long",
    required: true,
  },
  {
    id: "email",
    label: "Email",
    placeholder: "Enter your email address",
    title:
      "Email should be a valid email address that contains '@' and ends with '.com'",
    required: true,
  },
  {
    id: "phone",
    label: "Phone Number",
    placeholder: "Enter your phone number",
    title: "Phone number should be 10 digits long",
    required: true,
  },
];

const ADDRESS_FIELDS = [
  {
    id: "country",
    label: "Country",
    placeholder: "Enter your country",
    title: "Country is required",
    required: true,
  },

  {
    id: "city",
    label: "City",
    placeholder: "Enter your city",
    title: "City is required",
    required: true,
  },

  {
    id: "street",
    label: "Street Address",
    placeholder: "Enter your street address",
    title: "Street address is required",
    required: true,
  },

  {
    id: "zipcode",
    label: "Zip Code",
    placeholder: "Enter your zip code.e.g. 12345",
    title: "Zip code is required",
    required: true,
  },
];

const PAYMENT_FIELDS = [
  {
    id: "cardHolderName",
    label: "Card Holder Name",
    placeholder: "Enter the name on the card",
    title: "Card holder name is required",
    required: true,
  },
  {
    id: "cardNumber",
    label: "Card Number",
    placeholder: "1234 5678 9012 3456",
    title: "Card number is required and should be 16 digits long",
    required: true,
  },
  {
    id: "expiryDate",
    label: "Expiry Date",
    type: "date",
    min: new Date().toISOString().split("T")[0],
    title: "Expiry date is required",
    required: true,
  },
  {
    id: "cvv",
    label: "CVV",
    type: "password",
    placeholder: "123",
    title: "CVV is required and should be 3 digits long",
    required: true,
  },
];

export { PERSONAL_INFO_FIELDS, ADDRESS_FIELDS, PAYMENT_FIELDS };
