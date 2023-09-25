import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box } from "@mui/material";
import Image from "next/image";
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
  WalletIcon,
  SettingIcon,
} from "./Icons";

const SmallSideBar = ({ sideBarOpen, setSidebarOpen }) => {
  const iconsCollection = [
    { icon: <HomeIcon /> },
    { icon: <RefreshIcon /> },
    { icon: <WalletIcon /> },
    { icon: <GraphIcon /> },
    { icon: <BankIcon /> },
    { icon: <GiftIcon /> },
    { icon: <LightIcon /> },
    { icon: <NotificationIcon color="white" height="22px" width="22px" /> },
    { icon: <SettingIcon color="white" height="22px" width="22px" /> },
    { icon: <HelpIcon /> },
  ];
  return (
    <Box
      sx={{
        overflow: "hidden",
        zIndex: { lg: sideBarOpen ? 0 : -1 },
        position: {
          defaultSize: "absolute",
          sm: "relative",
        },
        minWidth: { defaultSize: "100%", lg: "50px" },
        transition: "all .3s ease-in-out",
        bgcolor: "color.black",
        color: "color.white",
        height: "100vh",
        marginLeft: {
          lg: sideBarOpen ? "0" : "-75px",
        },
        opacity: {
          lg: sideBarOpen ? "1" : "0",
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
          width={35}
          height={35}
          src="/assets/img/small_logo.png"
          alt="small_logo"
        />
      </Box>
      <Box
        sx={{
          overflowY: "auto",
          overflowX: "hidden",
          height: "calc(100vh - 139px)",
        }}
      >
        <Box sx={{ paddingTop: "20px" }}>
          {iconsCollection.map((obj, index) => (
            <Box
              key={index}
              onClick={() => setSidebarOpen(!sideBarOpen)}
              sx={{
                position: "relative",
                color: "color.white",
                padding: "10px 20px ",
                cursor: "pointer",
                transition: "all.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.2) ",
                },
              }}
            >
              {obj.icon}
            </Box>
          ))}

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
                transition: "all.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.2) ",
                },
              }}
            >
              <LogoutIcon />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SmallSideBar;
