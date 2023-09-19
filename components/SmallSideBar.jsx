import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CloseIcon from "@mui/icons-material/Close";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SettingsIcon from "@mui/icons-material/Settings";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import { Box } from "@mui/material";
import Image from "next/image";
import SideBarCommonBtn from "./SideBarCommonBtn";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

const SmallSideBar = ({ sideBarOpen, setSidebarOpen }) => {
  const iconsCollection = [
    <HomeIcon />,
    <AutorenewIcon />,
    <AccountBalanceWalletIcon />,
    <SignalCellularAltIcon />,
    <AccountBalanceIcon />,
    <CardGiftcardIcon />,
    <AccountBalanceIcon />,
    <WbIncandescentIcon />,
    <NotificationsActiveIcon />,
    <SettingsIcon />,
    <HelpOutlineIcon />,
  ];
  return (
    <Box
      sx={{
        overflow: "hidden",
        zIndex: { sm: 0 },
        position: {
          defaultSize: "absolute",
          sm: "relative",
        },
        minWidth: { defaultSize: "100%", sm: "50px" },
        transition: "all .3s ease-in-out",
        bgcolor: "color.black",
        color: "color.white",
        height: "100vh",
        margin: {
          defaultSize: sideBarOpen ? "none" : "none",
          sm: sideBarOpen ? "0" : "-50px",
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
        <Image width={35} height={35} src="/assets/img/small_logo.png" />
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
              onClick={() => setSidebarOpen(true)}
              key={index}
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
              {obj}
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
              }}
            >
              <PowerSettingsNewIcon />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SmallSideBar;
