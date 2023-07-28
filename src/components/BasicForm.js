import React, { useState } from "react";

const INITIAL_STATE = {
  email: "",
  passwd: "",
};

const getDirtyFields = (formFields) =>
  Object.keys(formFields).reduce((acc, key) => {
    const isDirty = !formFields[key] || formFields[key] !== INITIAL_STATE[key];
    return { ...acc, [key]: isDirty };
  }, {});

const VALIDATION = {
  email: [
    {
      isValid: (value) => !!value,
      message: "Email is required",
    },
    {
      isValid: (value) => /\S+@\S+\.\S+/.test(value),
      message: "Please enter a valid email",
    },
  ],
  passwd: [
    {
      isValid: (value) => !!value,
      message: "Password is required",
    },
  ],
};

const getErrorFields = (formFields) =>
  Object.keys(formFields).reduce((acc, field) => {
    if (!VALIDATION[field]) return acc;

    const fieldErrors = VALIDATION[field]
      .map((fieldValidations) => ({
        isValid: fieldValidations.isValid(formFields[field]),
        message: fieldValidations.message,
      }))
      .filter((errorField) => !errorField.isValid);

    return { ...acc, [field]: fieldErrors };
  }, {});

const BasicForm = () => {
  const [formInputs, setFormInputs] = useState(INITIAL_STATE);
  const [isDirty, setIsDirty] = useState({});
  // console.log("isDirty", isDirty);

  const errorFields = getErrorFields(formInputs);
  // console.log("errorFields", errorFields);

  const isDirtyWithError = ((errorFields, isDirty) => {
    const obj = {};
    for (let field of Object.keys(formInputs)) {
      obj[field] = errorFields[field]?.length > 0 && isDirty[field];
    }
    return obj;
  })(errorFields, isDirty);
  // console.log("isDirtyWithError", isDirtyWithError);

  const isFormValid = Object.values(errorFields).flat().length === 0;
  // const isFormValid = Object.values(isDirty).some((bool) => bool);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormInputs({
      ...formInputs,
      [id]: value,
    });
  };

  const handleBlur = (e) => {
    // console.log("handleBlur");
    const { id, value } = e.target;
    setIsDirty((prevState) => {
      return {
        ...prevState,
        ...getDirtyFields({ [id]: value }),
      };
    });
  };

  const handleSubmit = (e) => {
    // console.log("Handle submit");
    e.preventDefault();
    setIsDirty(
      Object.keys(formInputs).reduce((acc, key) => {
        return { ...acc, [key]: true };
      }, {})
    );
    // const currentErrors = getErrorFields(formInputs);
    // console.log(currentErrors);
    // const hasError = Object.values(currentErrors).flat().length > 0;
    const hasError = Object.values(errorFields).flat().length > 0;
    // console.log(hasError);
    if (hasError) return;

    const email = formInputs.email.trim();
    const passwd = formInputs.passwd.trim();
    alert(email + " - " + passwd);
    setFormInputs(INITIAL_STATE);
    setIsDirty({});
  };

  // React.useEffect(() => {
  //   console.log("errorFields: ", errorFields);
  // }, [errorFields]);

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={
          isDirtyWithError.email ? "form-control invalid" : "form-control"
        }
      >
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={formInputs.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      {isDirtyWithError.email ? (
        <p className="error-text">{errorFields.email[0]?.message}</p>
      ) : null}
      <div
        className={
          isDirtyWithError.passwd ? "form-control invalid" : "form-control"
        }
      >
        <label htmlFor="passwd">Your password</label>
        <input
          type="password"
          id="passwd"
          value={formInputs.passwd}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
      {isDirtyWithError.passwd ? (
        <p className="error-text">{errorFields.passwd[0]?.message}</p>
      ) : null}
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
        {/* <button>Submit</button> */}
      </div>
    </form>
  );
};

export default BasicForm;
