import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SettingsIcon from "@mui/icons-material/Settings";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import { Box } from "@mui/material";
import Image from "next/image";

const SmallSideBar = ({ sideBarOpen, setSidebarOpen }) => {
  const iconsCollection = [
    { icon: <HomeIcon /> },
    { icon: <AutorenewIcon /> },
    { icon: <AccountBalanceWalletIcon /> },
    { icon: <SignalCellularAltIcon /> },
    { icon: <AccountBalanceIcon /> },
    { icon: <CardGiftcardIcon /> },
    { icon: <WbIncandescentIcon /> },
    { icon: <NotificationsActiveIcon /> },
    { icon: <SettingsIcon /> },
    { icon: <HelpOutlineIcon /> },
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
              <PowerSettingsNewIcon />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SmallSideBar;
