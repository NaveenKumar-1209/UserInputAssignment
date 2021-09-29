import React from "react";
import "./Inner.css";
import { Link, useParams } from "react-router-dom";

const Inner = () => {
  return (
    <div className="inner">
      <div className="btn profile">
        <Link to="/login/:user-details/Welcome" className="loginform">
          <button>Profile</button>
        </Link>
      </div>
      <div className="btn logout">
        <Link to="/login/:user-details/logout" className="loginform">
          <button>Logout</button>
        </Link>
      </div>
    </div>
  );
};

export default Inner;
