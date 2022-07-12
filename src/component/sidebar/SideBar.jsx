import React from "react";

import "./SideBar.css";

import SideBarRow from "./SideBarRow";

import GroupIcon from "@mui/icons-material/Group";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import FlagIcon from "@mui/icons-material/Flag";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

const SideBar = () => {
  return (
    <div className="sidebar">
      <SideBarRow
        src="https://scontent.fmnl25-3.fna.fbcdn.net/v/t39.30808-6/288992530_5669659729713319_282062131013335484_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGpaPm3N8pBnUUIMBKpbFXL3JmLNA-dJT3cmYs0D50lPdIrr81pbqfYOGuNilt8XFziRpCfLIERhfxbLor6Fjnb&_nc_ohc=cCk1lG1uFRUAX-qPsoH&_nc_ht=scontent.fmnl25-3.fna&oh=00_AT-2QaGaOwLMiFzWbJMCDhV24habuCg6Mq3fwvcLFRovfg&oe=62CFC322"
        title="Jayson Prince Diaz"
      />
      <SideBarRow Icon={GroupIcon} title="Friends" />
      <SideBarRow Icon={AccessTimeFilledIcon} title="Memories" />
      <SideBarRow Icon={FlagIcon} title="Pages" />
      <SideBarRow Icon={GroupAddIcon} title="Groups" />
      <SideBarRow Icon={StorefrontRoundedIcon} title="Marketplace" />
      <SideBarRow Icon={KeyboardArrowDownRoundedIcon} title="See more" />
    </div>
  );
};

export default SideBar;
