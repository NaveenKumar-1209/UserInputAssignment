import React from "react";
import "./LoginForm.css";
import loginInput from "./Login-input";
import { Link } from "react-router-dom";

const Login = (props) => {
  const isMobile = (value) => value.length === 10;
  const isPassward = (value) => value.length >= 5;

  const {
    value: enteredMobile,
    isValid: enteredMobileIsValid,
    hasError: mobileInputHasError,
    valueChangeHandler: mobileChangeHandler,
    inputBlurHandler: mobileBlurHandler,
    reset: resetMobileInput,
  } = loginInput(isMobile);

  const {
    value: enteredPassward,
    isValid: enteredPasswardIsValid,
    hasError: passwardInputHasError,
    valueChangeHandler: passwardChangeHandler,
    inputBlurHandler: passwardBlurHandler,
    reset: resetPasswardInput,
  } = loginInput(isPassward);

  let formIsValid = false;

  if (enteredMobileIsValid && enteredPasswardIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();
     const selectedUser = props.userDetails.filter((user)=>{
      return (user.mobile === enteredMobile) && (user.password === enteredPassward);
    })
    console.log(selectedUser)
    if(!selectedUser){
      return;
    }

    if (!enteredMobileIsValid) {
      return;
    }

    if (!enteredPasswardIsValid) {
      return;
    }
    console.log("submitted");
    console.log({ enteredMobile, enteredPassward });
    resetMobileInput();
    resetPasswardInput();
  };
  return (
    <div className="MainBody">
      <h3 className="title">Login</h3>
      <form onSubmit={formSubmissionHandler}>
        <div className="user-details">
          <div className="input-box">
            <label htmlFor="Mobile">Mobile number</label>
            <input
              type="text"
              id="mobile"
              placeholder="Enter your mobile number"
              onChange={mobileChangeHandler}
              onBlur={mobileBlurHandler}
              value={enteredMobile}
            />
            {mobileInputHasError && (
              <p className="error-text" style={{ color: "red" }}>
                Enter a valid mobile number
              </p>
            )}
          </div>
          <div className="input-box">
            <label htmlFor="Passward">Passward</label>
            <input
              type="Passward"
              id="Passward"
              placeholder="Enter your passward"
              onChange={passwardChangeHandler}
              onBlur={passwardBlurHandler}
              value={enteredPassward}
            />
            {passwardInputHasError && (
              <p className="error-text" style={{ color: "red" }}>
                Enter a valid passward
              </p>
            )}
          </div>
        </div>

        <div className="btn">
          <Link to="/login/:user-details" className="loginform">
            <button disabled={!formIsValid}>Login</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
