import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Image from "next/image";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import HomeIcon from "@mui/icons-material/Home";
import SideBarCommonBtn from "./SideBarCommonBtn";
import SideBarText from "./SideBarText";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Sidebar = ({ sideBarOpen }) => {
  const wallet = {
    name: "My Wallet",
    content: ["one", "Two", "Three", "Four", "Five", "Six"],
    icon: <AccountBalanceWalletIcon />,
  };
  const transactions = {
    name: "Transactions",
    content: [
      "Buy & Sell Coin",
      "Deposit Yen",
      "Withdraw Yen",
      "Send Coin",
      "Receive Coin",
      "Deposit Coin",
    ],
    icon: <AccountBalanceIcon />,
  };
  const reward = {
    name: "Rewards",
    content: ["third", "Two", "Three", "Four", "Five", "Six"],
    icon: <CardGiftcardIcon />,
  };
  const utility = {
    name: "Utility Plan",
    content: ["third", "Two", "Three", "Four", "Five", "Six"],
    icon: <WbIncandescentIcon />,
  };
  return (
    <Box
      sx={{
        minWidth: { lg: "300px" },
        transition: "all .3s ease-in-out",
        bgcolor: "color.black",
        color: "color.white",
        height: "100vh",
        padding: "20px 0px",
        marginLeft: { lg: "0", sm: sideBarOpen ? "-100px" : "0" },
      }}
    >
      <Box sx={{ padding: "0 20px 0 20px" }}>
        <Image width={180} height={35} src="/assets/img/logo.png" />
      </Box>
      <Box sx={{ overflow: "auto", height: "100%" }}>
        <Box>
          <SideBarText heading="Quick Access" />
          <SideBarCommonBtn icon={<HomeIcon />} title="Dashboard" />
          <SideBarCommonBtn icon={<AutorenewIcon />} title="Exchange" />
          <Dropdown value={wallet} />
          <SideBarCommonBtn icon={<AutorenewIcon />} title="Tradeview" />
        </Box>
        <Box>
          <SideBarText heading="Service" />
          <Dropdown value={transactions} />
          <Dropdown value={reward} />
          <Dropdown value={utility} />
        </Box>
        <Box>
          <SideBarText heading="Account" />
          <SideBarCommonBtn
            icon={<NotificationsActiveIcon />}
            title="Notifications"
          />
          <SideBarCommonBtn icon={<SettingsIcon />} title="Settings" />
          <SideBarCommonBtn icon={<HelpOutlineIcon />} title="FAQs" />
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
