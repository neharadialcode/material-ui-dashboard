import React, { useState } from "react";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Button } from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";

const Dropdown = ({ id }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  const dropdownData = [
    {
      name: "first",
      content: ["one", "Two", "Three", "Four", "Five", "Six"],
      icon: <AutorenewIcon />,
    },
    {
      name: "second",
      content: ["second", "Two", "Three", "Four", "Five", "Six"],
      icon: <AccountBalanceWalletIcon />,
    },
    {
      name: "third",
      content: ["third", "Two", "Three", "Four", "Five", "Six"],
      icon: <AccountBalanceIcon />,
    },
    {
      name: "third",
      content: ["third", "Two", "Three", "Four", "Five", "Six"],
      icon: <CardGiftcardIcon />,
    },
    {
      name: "third",
      content: ["third", "Two", "Three", "Four", "Five", "Six"],
      icon: <WbIncandescentIcon />,
    },
  ];
  return (
    <>
      {dropdownData.splice(id, 1).map((obj, i) => (
        <>
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
            }}
          >
            <Button
              sx={{
                color: "color.white",
                padding: 0,
                position: "absolute",
                left: "0px",
                top: "0px",
                minWidth: "auto",
                zIndex: 0,
              }}
            >
              {obj.icon}
            </Button>
            <TreeView
              aria-label="file system navigator"
              sx={{
                overflowY: "auto",
                overflowX: "hidden",
                color: "color.white",
                width: "100%",
                zIndex: 1,
                display: "block",
              }}
            >
              <TreeItem
                onClick={handleClick}
                nodeId="1"
                label={obj.name}
                sx={{ position: "relative", zIndex: 2, padding: "0 0 0 0" }}
              >
                {obj.content.map((item, index) => (
                  <TreeItem
                    style={{ padding: 0 }}
                    key={index}
                    nodeId="2"
                    label={item}
                  />
                ))}
              </TreeItem>
            </TreeView>
            <Button
              variant="text"
              sx={{
                color: "color.white",
                padding: "0 0 0 0",
                position: "absolute",
                right: "10px",
                top: "0px",
                minWidth: "auto",
              }}
            >
              {open ? <ChevronRightIcon /> : <ExpandMoreIcon />}
            </Button>
          </Box>
        </>
      ))}
    </>
  );
};

export default Dropdown;
