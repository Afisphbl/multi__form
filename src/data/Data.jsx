const Data = [
  [
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
  ],
];

export default Data;
