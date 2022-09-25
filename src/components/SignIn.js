import React, { Fragment, useState } from "react";

const SignIn = () => {
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
  });

  const { userId, password } = formData;

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function onSubmit(event) {
    event.preventDefault();
    console.log("success");
  }

  return (
    <Fragment>
      <div className="form-container sign-in-container">
        <form onSubmit={onSubmit}>
          <h1>Sign in</h1>

          <input
            className="app-input"
            type="text"
            name="userId"
            onChange={handleChange}
            value={formData.userId}
            placeholder="User Id"
          />
          <input
            className="app-input"
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            placeholder="Password"
          />
          <br />
          <button className="auth" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default SignIn;
