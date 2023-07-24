import React from "react";
const BasicForm = () => {
  const handleSubmit = (e) => {
    const name = e.target.elements.email.value;
    const passwd = e.target.elements.passwd.value;
    e.preventDefault();
    alert(name + " - " + passwd);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input type="text" id="email" />
      </div>
      <div className="form-control">
        <label htmlFor="password">Your password</label>
        <input type="password" id="passwd" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
