import CloseIcon from "@mui/icons-material/Close";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import Dropdown from "./Dropdown";
import {
  BankIcon,
  GiftIcon,
  GraphIcon,
  HelpIcon,
  HomeIcon,
  LightIcon,
  LogoutIcon,
  NotificationIcon,
  RefreshIcon,
  SettingIcon,
  WalletIcon,
} from "./Icons";
import SideBarCommonBtn from "./SideBarCommonBtn";
import SideBarText from "./SideBarText";
import SmallSideBar from "./SmallSideBar";

const Sidebar = ({ sideBarOpen, setSidebarOpen }) => {
  const wallet = {
    name: "My Wallet",
    content: ["one", "Two", "Three", "Four", "Five", "Six"],
    icon: <WalletIcon />,
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
    icon: <BankIcon />,
  };
  const reward = {
    name: "Rewards",
    content: ["third", "Two", "Three", "Four", "Five", "Six"],
    icon: <GiftIcon />,
  };
  const utility = {
    name: "Utility Plan",
    content: ["third", "Two", "Three", "Four", "Five", "Six"],
    icon: <LightIcon />,
  };
  return (
    <>
      <Box
        sx={{
          overflow: "hidden",
          zIndex: { lg: 0, defaultSize: 5 },
          position: {
            defaultSize: "absolute",
            lg: "relative",
          },
          minWidth: { defaultSize: "100%", sm: "300px" },
          transition: "all .3s ease-in-out",
          bgcolor: "color.black",
          color: "color.white",
          height: "100vh",
          marginLeft: {
            lg: sideBarOpen ? "-300px" : "0",
            defaultSize: sideBarOpen ? "-100%" : "0",
            sm: sideBarOpen ? "-300px" : "0",
          },
        }}
      >
        <Box
          sx={{
            padding: "20px 20px 10px 20px",
            borderBottom: "1px solid",
            borderColor: "color.lightWhite",
          }}
        >
          <Image
            width={180}
            height={35}
            src="/assets/img/logo.png"
            alt="logo"
          />
          <Box onClick={() => setSidebarOpen(!sideBarOpen)}>
            <CloseIcon
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
                  lg: "none",
                },
              }}
            />
          </Box>
        </Box>
        <Box sx={{ overflow: "auto", height: "calc(100vh - 139px)" }}>
          <Box>
            <SideBarText heading="Quick Access" />
            <SideBarCommonBtn icon={<HomeIcon />} title="Dashboard" />
            <SideBarCommonBtn icon={<RefreshIcon />} title="Exchange" />
            <Dropdown value={wallet} />
            <SideBarCommonBtn icon={<GraphIcon />} title="Tradeview" />
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
              icon={
                <NotificationIcon color="white" height="22px" width="22px" />
              }
              title="Notifications"
            />
            <SideBarCommonBtn
              icon={<SettingIcon color="white" height="22px" width="22px" />}
              title="Settings"
            />
            <SideBarCommonBtn icon={<HelpIcon />} title="FAQs" />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "absolute",
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
                  cursor: "pointer",
                }}
              >
                <LogoutIcon />
              </Box>

              <Button
                sx={{
                  width: "100vw",
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
      <Box
        sx={{
          display: { lg: "block", defaultSize: "none" },
        }}
      >
        <SmallSideBar
          sideBarOpen={sideBarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </Box>
    </>
  );
};

export default Sidebar;
