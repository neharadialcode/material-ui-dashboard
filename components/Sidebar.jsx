import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SettingsIcon from "@mui/icons-material/Settings";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import Dropdown from "./Dropdown";
import SideBarCommonBtn from "./SideBarCommonBtn";
import SideBarText from "./SideBarText";
import CloseIcon from "@mui/icons-material/Close";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Sidebar = ({ sideBarOpen, setSidebarOpen }) => {
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
        zIndex: 0,
        position: {
          defaultSize: "absolute",
          sm: "relative",
        },
        minWidth: { defaultSize: "100%", sm: "300px" },
        transition: "all .3s ease-in-out",
        bgcolor: "color.black",
        color: "color.white",
        height: "100vh",
        padding: "20px 0px",
        marginLeft: {
          lg: "0",
          defaultSize: sideBarOpen ? "-100%" : "0",
          sm: sideBarOpen ? "-300px" : "0",
        },
      }}
    >
      <Box
        sx={{
          padding: "0 20px 10px 20px",
          borderBottom: "1px solid",
          borderColor: "color.lightWhite",
        }}
      >
        <Image width={180} height={35} src="/assets/img/logo.png" />
        <CloseIcon
          onClick={() => setSidebarOpen(false)}
          sx={{
            position: "absolute",
            right: "20px",
            top: "20px",
            cursor: "pointer",
            color: "color.white",
            width: "30px",
            height: "30px",
            display: {
              defaultSize: sideBarOpen ? "none" : "block",
              sm: "none",
            },
          }}
        />
      </Box>
      <Box sx={{ overflow: "auto", height: "calc(100vh - 139px)" }}>
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              position: "fixed",
              bottom: "0",
              padding: "20px",
              width: { defaultSize: "100%" },
              backgroundColor: "color.black",
              borderTop: "1px solid",
              borderColor: "color.lightWhite",
            }}
          >
            <Box
              sx={{
                position: "relative",
                color: "color.white",
                padding: "0 10px 0 0 ",
              }}
            >
              <PowerSettingsNewIcon />
            </Box>

            <Button
              sx={{
                width: "100%",
                display: "flex",
                padding: "0px",
                justifyContent: "flex-start",
                color: "color.white",
              }}
            >
              Logout
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
