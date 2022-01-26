const validate = (values) => {
  const errors = {};
  // validate fullname

  if (!values.fullName) {
    errors.fullName = "FullName is required";
  } else if (values.fullName.length < 1) {
    errors.fullName = "Invalid FullName";
  }else{
    errors.fullName = "Awesome subject 😁";

  }

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.subject) {
    errors.subject = "subject is required";
  } else if (values.subject.length < 1) {
    errors.subject = "Invalid subject";
  } else {
    errors.subject = "Awesome subject 😁";
  }
  if (!values.message) {
    errors.message = "message is required";
  } else if (values.message.length < 1) {
    errors.message = "Invalid message";
  } else {
    errors.message = "Awesome message 😁";
  }
};

export default validate;
