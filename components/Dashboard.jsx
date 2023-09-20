import { Box } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ScrollableContent from "./ScrollableContent";
import { useState } from "react";

const Dashboard = () => {
  const [sideBarOpen, setSidebarOpen] = useState(false);

  return (
    <Box sx={{ p: 0, display: "flex", height: "100vh", width: "100%" }}>
      <Sidebar sideBarOpen={sideBarOpen} setSidebarOpen={setSidebarOpen} />

      <Box
        sx={{
          bgcolor: "color.lightBlue",
          width: "100%",
          transition: "all .3s ease-in-out",
          maxWidth: {
            lg: sideBarOpen ? "calc(100% - 75px)" : "calc(100% - 300px)",
            sm: sideBarOpen ? "100%" : "calc(100% - 300px)",
          },
          position: { sm: "relative" },
          zIndex: { sm: 1 },
        }}
      >
        <Header setSidebarOpen={setSidebarOpen} sideBarOpen={sideBarOpen} />
        <ScrollableContent />
      </Box>
    </Box>
  );
};

export default Dashboard;
