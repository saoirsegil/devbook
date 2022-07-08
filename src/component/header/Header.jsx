import React from "react";

import "./Header.css";

import FacebookIcon from "../../asset/facebookk.png";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import { Avatar, IconButton } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src={FacebookIcon} alt="logo" />
        <div className="header__input">
          <SearchRoundedIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option">
          <HomeOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontIcon fontSize="large" />
        </div>
        <div className="header__option">
          <ExtensionOutlinedIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <IconButton
            sx={{
              backgroundColor: "#3a3b3c",
              borderRadius: "33px",
              marginRight: "15px",
            }}
          >
            <WidgetsOutlinedIcon
              fontSize="large"
              sx={{
                color: "#E4E6EB",
              }}
            />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "#3a3b3c",
              borderRadius: "33px",
              marginRight: "15px",
            }}
          >
            <MessageOutlinedIcon fontSize="large" sx={{ color: "#E4E6EB" }} />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "#3a3b3c",
              borderRadius: "33px",
              marginRight: "15px",
            }}
          >
            <NotificationsActiveOutlinedIcon
              fontSize="large"
              sx={{ color: "#E4E6EB" }}
            />
          </IconButton>
          <IconButton>
            <Avatar fontSize="large" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
