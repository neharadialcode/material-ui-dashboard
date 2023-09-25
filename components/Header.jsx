import { Box, InputAdornment, TextField } from "@mui/material";
import { BoxIcon, NotificationIcon, SettingIcon, ToggleIcon } from "./Icons";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
const Header = ({ setSidebarOpen, sideBarOpen }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 32px",
        height: "40px",
        alignItems: "center",
        backgroundColor: "color.white",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{ cursor: "pointer" }}
          onClick={() => setSidebarOpen(!sideBarOpen)}
        >
          <ToggleIcon />
        </Box>
        <Box sx={{ padding: "0 25px" }}>
          <BoxIcon />
        </Box>
        <TextField
          sx={{
            width: {
              lg: "30vw",
            },
            display: {
              defaultSize: "none",
              lg: "block",
            },
          }}
          type="search"
          variant="outlined"
          placeholder="Type any cryptocurrency..."
          fullWidth
          InputProps={{
            style: {
              border: "none",
              borderRadius: "50px",
              backgroundColor: "rgba(248, 249, 251, 1)",
              padding: "5px 0 5px 10px",
            },
            startAdornment: (
              <InputAdornment>
                <SearchIcon
                  sx={{
                    color: "color.skyBlue",
                    width: "30px",
                    height: "30px",
                  }}
                />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image width={40} height={40} src="/assets/img/oval.png" />

        <Box sx={{ padding: { lg: "0 20px", defaultSize: "0px 10px" } }}>
          <SettingIcon color="#1F263E" height="25px" width="25px" />
        </Box>
        <Box sx={{ padding: { lg: "0 20px 0 0", defaultSize: "0 10px 0 0" } }}>
          <NotificationIcon color="#1F263E" height="25px" width="25px" />
        </Box>
        <Image width={30} height={30} src="/assets/img/US.png" />
      </Box>
    </Box>
  );
};

export default Header;
