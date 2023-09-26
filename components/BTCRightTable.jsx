import React from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { sliderData } from "./Helper";
import { GraphImgTable, Triangle, UpArrow, UpDownArrows } from "./Icons";
const BTCRightTable = () => {
  return (
    <Box
      sx={{
        backgroundColor: "color.white",
        width: "25%",
        minWidth: "310px",
        borderRadius: "0px 10px 0 0px",
        border: "1px solid ",
        borderLeft: 0,
        borderColor: "#DFE5F9",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "16.5px 20px",
          alignItems: "center",
          borderBottom: "1px solid",
          borderColor: "#DFE5F9",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <Triangle color="url(#paint0_linear_0_776)" />
          <Typography
            sx={{
              paddingLeft: "10px",
            }}
          >
            Market Cap
          </Typography>
        </Box>
        <Box>
          <UpDownArrows />
        </Box>
      </Box>
      <TableContainer
        component={Paper}
        sx={{ boxShadow: "none", width: "100%" }}
      >
        <Table size="small" aria-label="a dense table">
          <TableBody sx={{ border: 0 }}>
            {sliderData.map((obj) => (
              <TableRow
                key={obj.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": {
                    backgroundColor: "#FAFBFF",
                  },
                  border: 0,
                }}
              >
                <TableCell
                  sx={{
                    padding: "12px 20px",
                  }}
                  align="left"
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ paddingRight: "10px" }}>
                      <img src={obj.icon} alt={obj.name} />
                    </Box>
                    <Box>{obj.name}</Box>
                  </Box>
                </TableCell>
                <TableCell sx={{ padding: "12px 20px" }} align="right">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Typography sx={{ paddingRight: "10px" }}>
                      ¥{obj.amount}
                    </Typography>
                    <Typography
                      sx={{
                        color: {
                          defaultSize: String(obj.range).includes("-")
                            ? "color.red"
                            : "#01C0AA",
                        },
                      }}
                    >
                      {String(obj.range).includes("-") ? "" : "+"}
                      {obj.range}%
                      <UpArrow
                        rotate={
                          String(obj.range).includes("-") ? "180deg" : "0deg"
                        }
                        color={
                          String(obj.range).includes("-") ? "red" : "#01C0AA"
                        }
                      />
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BTCRightTable;
