import React from "react";

import "./RightBar.css";

import Sponsor from "../../asset/sponsor.jpg";
import Sponsor2 from "../../asset/sponsor2.jpg";

const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="rightbar__container">
        <h1>Sponsored</h1>
        <div className="rightbar__sponsors">
          <img src={Sponsor} alt="" />
          <div className="rightbar__text">
            <h2>Birthday Poster</h2>
            <h4>jdesign.com</h4>
          </div>
        </div>
        <div className="rightbar__sponsors">
          <img src={Sponsor2} alt="" />
          <div className="rightbar__text">
            <h2>Invitation</h2>
            <h4>jdesign.com</h4>
          </div>
        </div>
      </div>
      <div className="rightbar__pages"></div>
      <div className="rightbar__birthday"></div>
      <div className="rightbar__contacts"></div>
    </div>
  );
};

export default RightBar;
