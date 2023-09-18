import React, { useState } from "react";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";

const Dropdown = ({ value }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Accordion
          sx={{ backgroundColor: "color.black", color: "color.white" }}
          onClick={handleClick}
        >
          <AccordionSummary
            expandIcon={
              <ExpandMoreIcon
                sx={{
                  color: "color.white",
                  width: "30px",
                  height: "30px",
                  transform: {
                    defaultSize: open ? "rotate(-180deg)" : "rotate(-90deg)",
                  },
                }}
              />
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            color="color.white"
            className={` ${open && "active_option"} sidebar_item`}
            sx={{ paddingRight: "50px" }}
          >
            <Button
              sx={{
                color: "color.white",
                padding: "0 10px 0 0 ",
                minWidth: "auto",
                position: "relative",
                zIndex: 0,
              }}
            >
              {value.icon}
            </Button>
            <Typography sx={{ color: "color.white" }}>{value.name}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "0" }}>
            {value.content.map((item, index) => (
              <Typography
                sx={{
                  margin: "0px 0px 0px 50px",
                  padding: "10px 10px 10px 10px",
                  "&&:hover": {
                    background: "rgba(255, 255, 255, 0.072)",
                  },
                  cursor: "pointer",
                }}
              >
                {item}
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
};

export default Dropdown;
