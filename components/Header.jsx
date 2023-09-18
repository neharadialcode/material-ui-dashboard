import { Box } from "@mui/material";
import React from "react";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import { BoxIcon, ToggleIcon } from "./Icons";

const Header = ({ setSidebarOpen }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 32px",
        height: "40px",
        alignItems: "center",
        backgroundColor: "color.white",
      }}
    >
      <Box
        onClick={() => setSidebarOpen((prev) => !prev)}
        sx={{ display: "flex" }}
      >
        <ToggleIcon />
        <Box sx={{ padding: "0 20px" }}>
          <BoxIcon />
        </Box>
      </Box>
      <Box>secondary content</Box>
    </Box>
  );
};

export default Header;
