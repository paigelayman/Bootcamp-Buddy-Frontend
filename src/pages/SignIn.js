import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SignIn = () => {
  // variable
  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  });
  let navigate = useNavigate();

  // Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    //do await login function for user
    setFormValues({
      email: "",
      password: ""
    });
    navigate("/");
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  // Render
  let signInRender = (
    <div>
      <div>Sign in form</div>
      <form onSubmit={handleSubmit}>
        <label>Email: </label>{" "}
        <input
          onChange={handleChange}
          value={formValues.email}
          name="email"
          type="email"
          placeholder="john.doe@email.com"
        />
        <br />
        <label>Password: </label>{" "}
        <input
          onChange={handleChange}
          value={formValues.password}
          name="password"
          type="password"
        />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
  let toRender = (
    <div>
      <div>This is a sign in page</div>
      {signInRender}
    </div>
  );
  return toRender;
};

export default SignIn;
