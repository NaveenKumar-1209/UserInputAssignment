import React, { useState, useEffect } from "react";
import "./Home.scss";
import Inner from "./Components/Inner";
import Login from "./Components/Login/Login";
import { Switch, Route, Link } from "react-router-dom";
import SignupForm from "./Components/Signup/SignupForm";
import FirstButton from "./Components/FirstButton";
import SecondButton from "./Components/SecondButton";

const Home = () => {
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    fetch("https://registering-user-default-rtdb.firebaseio.com/users.json")
      .then((response) => response.json())
      .then((responseData) => {
        const loadedDetails = [];
        for (const key in responseData) {
          loadedDetails.push({
            id: key,
            title: responseData[key].title,
          });
        }
        setUserDetails(loadedDetails);
      });
  }, []);
  useEffect(() => {}, [userDetails]);

  const addUserDetailsHandler = (details) => {
    fetch("https://registering-user-default-rtdb.firebaseio.com/users.json", {
      method: "POST",
      body: JSON.stringify(details),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setUserDetails((prevDetails) => [
          ...prevDetails,
          { id: responseData.name, ...details },
        ]);
      });
  };

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="brand">
            <h1>Akestech</h1>
          </div>
          <div className="Registration">
            <Link to="/login" className="user login">
              Login
            </Link>
            <Link to="./" className="user signup">
              Signup
            </Link>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <SignupForm onAddUserDetails={addUserDetailsHandler} />
        </Route>
        <Route exact path="/login">
          <Login userDetails={userDetails} />
        </Route>
        <Route exact path="/login/:user-details">
          <Inner />
        </Route>
        <Route exact path="/login/:user-details/Welcome">
          <FirstButton />
        </Route>
        <Route exact path="/login/:user-details/logout">
          <SecondButton />
        </Route>
      </Switch>
    </>
  );
};

export default Home;
