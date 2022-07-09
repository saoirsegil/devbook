import React from "react";

import "./Header.css";

import FacebookIcon from "../../asset/facebookk.png";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import { Avatar, Badge, IconButton } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src={FacebookIcon} alt="logo" />
        <div className="header__input">
          <SearchRoundedIcon />
          <input type="text" placeholder="Search Devbook" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
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
              backgroundColor: "#edecec",
              borderRadius: "33px",
              marginRight: "15px",
            }}
          >
            <WidgetsOutlinedIcon
              fontSize="large"
              sx={{
                color: "#gray",
              }}
            />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "#edecec",
              borderRadius: "33px",
              marginRight: "15px",
            }}
          >
            <MessageOutlinedIcon fontSize="large" sx={{ color: "gray" }} />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "#edecec",
              borderRadius: "33px",
              marginRight: "15px",
            }}
          >
            <Badge badgeContent={143} color="error">
              <NotificationsActiveOutlinedIcon
                fontSize="large"
                sx={{ color: "#gray" }}
              />
            </Badge>
          </IconButton>
          <IconButton>
            <Avatar src="https://avatars.githubusercontent.com/u/95516878?v=4" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
