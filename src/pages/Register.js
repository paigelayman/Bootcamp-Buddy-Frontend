import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  // Variables
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isShowPassword, toggleIsShowPassword] = useState(false);
  let navigate = useNavigate();

  // Functions
  const handlePasswordToggle = (e) => {
    if (e.target.checked) {
      toggleIsShowPassword(true);
      setFormValues({ ...formValues, confirmPassword: "" });
    } else {
      toggleIsShowPassword(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    //do function await check email, if failed provide user
    //do function await register, if failed, provide feedback
    //do await login function for user automatically to get the token session
    setFormValues({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    });
    navigate("/");
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  // Renders
  let passwordMatchRender = <div></div>;
  if (formValues.password && formValues.confirmPassword) {
    if (formValues.password !== formValues.confirmPassword) {
      passwordMatchRender = <div>Password did not match!</div>;
    }
  }

  let passwordFieldRender = (
    <div>
      <label>Password:</label>{" "}
      <input
        onChange={handleChange}
        value={formValues.password}
        name="password"
        type="password"
        required
      />
      <input
        onChange={handlePasswordToggle}
        value={isShowPassword}
        name="isShowPassword"
        type="checkbox"
      />
      <label>Show Password</label>
      <br />
      <label>Confirm Password:</label>{" "}
      <input
        onChange={handleChange}
        value={formValues.confirmPassword}
        name="confirmPassword"
        type="password"
        required
      />{" "}
      {passwordMatchRender} <br />
    </div>
  );
  if (isShowPassword) {
    passwordFieldRender = (
      <div>
        <label>Password:</label>{" "}
        <input
          onChange={handleChange}
          value={formValues.password}
          name="password"
          type="text"
          required
        />
        <input
          onChange={handlePasswordToggle}
          value={isShowPassword}
          name="isShowPassword"
          type="checkbox"
        />
        <label>Show Password</label>
        <br />
      </div>
    );
  }

  let registerButtonRender = <button disabled>Register</button>;
  if (
    formValues.firstName &&
    formValues.lastName &&
    formValues.email &&
    formValues.password
  ) {
    if (isShowPassword) {
      registerButtonRender = <button>Register</button>;
    } else if (formValues.password === formValues.confirmPassword) {
      registerButtonRender = <button>Register</button>;
    }
  }

  let registerFormRender = (
    <div>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>{" "}
        <input
          onChange={handleChange}
          value={formValues.firstName}
          name="firstName"
          type="text"
          placeholder="John"
          required
        />{" "}
        <br />
        <label>Last Name:</label>{" "}
        <input
          onChange={handleChange}
          value={formValues.lastName}
          name="lastName"
          type="text"
          placeholder="Doe"
          required
        />{" "}
        <br />
        <label>Email:</label>{" "}
        <input
          onChange={handleChange}
          value={formValues.email}
          name="email"
          type="email"
          placeholder="john.doe@email.com"
          required
        />
        <br />
        {passwordFieldRender}
        {registerButtonRender}
      </form>
    </div>
  );
  let toRender = (
    <div>
      <div>This is register page</div>
      {registerFormRender}
    </div>
  );
  return toRender;
};
export default Register;
