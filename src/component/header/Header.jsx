import React from "react";

import "./Header.css";

import Icon from "../../asset/icon.png";

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
        <img src={Icon} alt="logo" />
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
            <Avatar src="https://scontent.fmnl25-3.fna.fbcdn.net/v/t39.30808-6/288992530_5669659729713319_282062131013335484_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGpaPm3N8pBnUUIMBKpbFXL3JmLNA-dJT3cmYs0D50lPdIrr81pbqfYOGuNilt8XFziRpCfLIERhfxbLor6Fjnb&_nc_ohc=cCk1lG1uFRUAX-qPsoH&_nc_ht=scontent.fmnl25-3.fna&oh=00_AT-2QaGaOwLMiFzWbJMCDhV24habuCg6Mq3fwvcLFRovfg&oe=62CFC322" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
