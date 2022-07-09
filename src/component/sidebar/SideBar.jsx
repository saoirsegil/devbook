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
        src="https://avatars.githubusercontent.com/u/95516878?v=4"
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
