import React, { useState } from "react";

const BasicForm = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPasswd, setInputPasswd] = useState("");

  const handleEmailChange = (e) => {
    setInputEmail(e.target.value);
  };
  const handlePasswdChange = (e) => {
    setInputPasswd(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = inputEmail.trim();
    const passwd = inputPasswd.trim();
    alert(email + " - " + passwd);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={inputEmail}
          onChange={handleEmailChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="password">Your password</label>
        <input
          type="password"
          id="passwd"
          value={inputPasswd}
          onChange={handlePasswdChange}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
