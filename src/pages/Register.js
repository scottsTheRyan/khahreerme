import React from 'react';
import { useState, useEffect } from "react";
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { toast } from "react-toastify";




const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
   const [values, setValues] = useState(initialState);

   // redux toolkit and useNavigate later

   const handleChange = (e) => {
     const name = e.target.name;
     const value = e.target.value;
    //  console.log(`${name}:${value}`);
     setValues({ ...values, [name]: value });
   };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast("You're the best, so fill out all fields");
      
    }
  };

   const toggleMember = () => {
     setValues({ ...values, isMember: !values.isMember });
   };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {/* name field */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email field */}
        <FormRow
          type="email"
          name="email"
          value={values.name}
          handleChange={handleChange}
        />
        {/* password field */}
        <FormRow
          type="password"
          name="password"
          value={values.name}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}

          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}
  
export default Register;