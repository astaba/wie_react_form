import React, { useState } from "react";

const INITIAL_STATE = {
  email: "",
  passwd: "",
};
const getDirtyFields = (formFields) =>
  Object.keys(formFields).reduce((acc, key) => {
    const isDirty = formFields[key] !== INITIAL_STATE[key];
    return { ...acc, [key]: isDirty };
  }, {});

const BasicForm = () => {
  const [formInputs, setFormInputs] = useState(INITIAL_STATE);

  const dirtyFields = getDirtyFields(formInputs);
  const hasGotDirty = Object.values(dirtyFields).every((isDirty) => !isDirty);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormInputs({
      ...formInputs,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = formInputs.email.trim();
    const passwd = formInputs.passwd.trim();
    alert(email + " - " + passwd);
    setFormInputs(INITIAL_STATE);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={formInputs.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="password">Your password</label>
        <input
          type="password"
          id="passwd"
          value={formInputs.passwd}
          onChange={handleChange}
        />
      </div>
      <div className="form-actions">
        <button disabled={hasGotDirty}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
