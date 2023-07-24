import React, { useState } from "react";

const BasicForm = () => {
  const [ formInputs, setFormInputs ] = useState({
    email: "",
    passwd: "",
  });

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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
