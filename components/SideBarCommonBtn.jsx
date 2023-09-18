import { Box, Button } from "@mui/material";
import React from "react";

const SideBarCommonBtn = ({ icon, title }) => {
  return (
    <Box
      className="sidebar_item"
      sx={{ display: "flex", alignItems: "center" }}
    >
      <Box
        sx={{
          position: "relative",
          color: "color.white",
          padding: "0 10px 0 0 ",
        }}
      >
        {icon}
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
        {title}
      </Button>
    </Box>
  );
};

export default SideBarCommonBtn;
