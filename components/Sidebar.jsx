import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Dropdown from "./Dropdown";
import Image from "next/image";
import AutorenewIcon from "@mui/icons-material/Autorenew";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "250px",
        bgcolor: "color.black",
        color: "fontColor.abc",
        height: "100vh",
        padding: "20px 0px",
      }}
    >
      <Image width={180} height={35} src="/assets/img/logo.png" />
      <Box sx={{ overflow: "auto", height: "100%" }}>
        <Typography
          variant="h4"
          sx={{ color: "color.white", padding: "20px 0" }}
        >
          Quick Access
        </Typography>
        <Box
          className="sidebar_item"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Button
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              padding: "0 0 0 30px",
              color: "color.white",
            }}
          >
            Dashboard
          </Button>
          <AutorenewIcon sx={{ position: "absolute", color: "color.white" }} />
        </Box>
        <Dropdown id={0} />
        <Dropdown id={1} />
        <Dropdown id={2} />
        <Dropdown id={3} />
      </Box>
    </Box>
  );
};

export default Sidebar;
