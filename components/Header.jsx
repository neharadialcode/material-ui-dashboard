import { Box } from "@mui/material";
import { BoxIcon, ToggleIcon } from "./Icons";

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
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{ cursor: "pointer" }}
          onClick={() => setSidebarOpen(!sideBarOpen)}
        >
          <ToggleIcon />
        </Box>
        <Box sx={{ padding: "0 25px" }}>
          <BoxIcon />
        </Box>
      </Box>
      <Box>secondary content</Box>
    </Box>
  );
};

export default Header;
