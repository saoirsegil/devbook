import React from "react";

import "./RightBar.css";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";

import Sponsor from "../../asset/sponsor.jpg";
import Sponsor2 from "../../asset/sponsor2.jpg";
import { Avatar } from "@mui/material";

const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="rightbar__container">
        <h1>Sponsored</h1>
        <div className="rightbar__sponsors">
          <div className="sponsor__one">
            <img src={Sponsor} alt="" />
            <div className="rightbar__text">
              <h2>Birthday Poster</h2>
              <h4>jdesign.com</h4>
            </div>
          </div>
        </div>
        <div className="rightbar__sponsors">
          <div className="sponsor__two">
            <img src={Sponsor2} alt="" />
            <div className="rightbar__text">
              <h2>Invitation</h2>
              <h4>jdesign.com</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="rightbar__pages">
        <h1>Your Pages and Profiles</h1>
        <div className="page__avatar">
          <Avatar src="https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/255383261_102907368873489_7093587662955183191_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LjU2xNnkXAkAX9kzRAS&_nc_ht=scontent.fmnl4-3.fna&oh=00_AT_1lthxskD7jbV9O8GwdZtKiquFRRwTtTR8QZr6aLs0OQ&oe=62D61E90" />
          <h1>Jay Design</h1>
        </div>
        <div className="page__icon">
          <NotificationsNoneOutlinedIcon />
          <h4>Notifications</h4>
        </div>
        <div className="page__icon">
          <CampaignOutlinedIcon />
          <h4>Create Promotion</h4>
        </div>
      </div>
      <div className="rightbar__birthday"></div>
      <div className="rightbar__contacts"></div>
    </div>
  );
};

export default RightBar;
