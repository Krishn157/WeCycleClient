import React, { Fragment, useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    accountType: "",
    password: "",
    confpassword: "",
  });

  const { email, name, accountType, password, confpassword } = formData;

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
      <div className="form-container sign-up-container">
        <form onSubmit={onSubmit}>
          <h1>Create Account</h1>
          <br />
          <div className="role_choice">
            <input
              type="radio"
              className="switch-input"
              id="choice_tome"
              name="accountType"
              checked
              value="Producer"
              onChange={handleChange}
            />
            <label
              htmlFor="choice_tome"
              className="switch-label switch-label-tome"
            >
              Producer
            </label>

            <input
              type="radio"
              className="switch-input"
              id="choice_tofrd"
              name="accountType"
              value="Consumer"
              checked={formData.accountType === "Consumer"}
              onChange={handleChange}
            />

            <label
              htmlFor="choice_tofrd"
              className="switch-label switch-label-tofrd"
            >
              Consumer
            </label>
            <span className="selection-indicator"></span>
          </div>

          <br />
          <input
            className="app-input"
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            placeholder="Organization Name"
          />
          <input
            className="app-input"
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="Organization Email"
          />

          <input
            className="app-input"
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            placeholder="Password"
          />
          <input
            className="app-input"
            type="password"
            name="confpassword"
            onChange={handleChange}
            value={formData.confpassword}
            placeholder="Re-enter Password"
          />
          <br />
          <button className="auth" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default SignUp;
