import React, { useState } from "react";

const SignUp = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    joinNewsletter: false,
  });

console.log("FormData====>",formData)

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name] : type === "checkbox" ? checked : value 
      };
    });
  };

const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
         console.log("Successfully sign Up")
    } else {
        console.log("Password do not match")
        return
    }
    if (formData.joinNewsletter) {
        console.log("Thanks for the signing up for our newsletter")
    }
    console.log("Submit FormData===>",formData)
}


  return (
    <div className=" row container">
      <form onSubmit={handleSubmit}>
        <div className="col-sm-12 mt-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="col-sm-12 mt-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="col-sm-12 mt-3">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="col-sm-12 mt-3">
          <input
            type="checkbox"
            name="joinNewsletter"
            checked={formData.joinNewsletter}
            onChange={handleChange}
          />{" "}
          <span>I want to join newsletter</span>
        </div>
        <button className="btn btn-secondary mt-3">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
