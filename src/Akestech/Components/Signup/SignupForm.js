import React from "react";
import "./SignupForm.css";
import useInput from "./use-input";

const SignupForm = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";
  const isMobile = (value) => value.length === 10;
  const isPassward = (value) => value.length >= 5;

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredMobile,
    isValid: enteredMobileIsValid,
    hasError: mobileInputHasError,
    valueChangeHandler: mobileChangeHandler,
    inputBlurHandler: mobileBlurHandler,
    reset: resetMobileInput,
  } = useInput(isMobile);

  const {
    value: enteredPassward,
    isValid: enteredPasswardIsValid,
    hasError: passwardInputHasError,
    valueChangeHandler: passwardChangeHandler,
    inputBlurHandler: passwardBlurHandler,
    reset: resetPasswardInput,
  } = useInput(isPassward);

  let formIsValid = false;

  if (enteredNameIsValid && enteredMobileIsValid && enteredPasswardIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    if (!enteredMobileIsValid) {
      return;
    }

    if (!enteredPasswardIsValid) {
      return;
    }

    props.onAddUserDetails({
      name: enteredName,
      mobile: enteredMobile,
      password: enteredPassward,
    });

    console.log("submitted");
    alert("Successfully Register");
    console.log({ enteredName, enteredMobile, enteredPassward });

    resetNameInput();
    resetMobileInput();
    resetPasswardInput();
  };
  return (
    <div className="MainBody">
      <h3 className="title">Registration</h3>
      <form onSubmit={formSubmissionHandler}>
        <div className="user-details">
          <div className="input-box">
            <label htmlFor="FirstName">Full Name</label>
            <input
              type="text"
              id="FullName"
              placeholder="Enter your full name"
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              value={enteredName}
            />
            {nameInputHasError && (
              <p className="error-text" style={{ color: "red" }}>
                Name must not be empty
              </p>
            )}
          </div>
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
          <button disabled={!formIsValid}>Register</button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
