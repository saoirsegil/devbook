import React from "react";

import Logo from "../asset/icon.png";

import "./SignIn.css";

const SignIn = () => {
  const signIn = () => {};

  return (
    <div className="signin">
      <div className="signin__logo">
        <img src={Logo} alt="" />
        <h1>devbook</h1>
      </div>
      <button variant="inherit" type="submit" onClick={signIn}>
        SIGN IN
      </button>
    </div>
  );
};

export default SignIn;
