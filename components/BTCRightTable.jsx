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
import { GraphImgTable, UpArrow } from "./Icons";
const BTCRightTable = () => {
  return (
    <TableContainer component={Paper} sx={{ boxShadow: "none", width: "25%" }}>
      <Table
        sx={{
          borderLeft: "1px solid ",
          borderColor: "#DFE5F9",
        }}
        size="small"
        aria-label="a dense table"
      >
        {" "}
        <TableHead
          sx={{
            bgcolor: "#FAFBFF",
            border: "1px solid",
            borderColor: "#DFE5F9",
          }}
        >
          <TableRow
            sx={{
              bgcolor: "#FAFBFF",
              border: "1px solid",
              borderColor: "#DFE5F9",
            }}
          >
            <TableCell sx={{ padding: "20px" }} align="left">
              Detail
            </TableCell>
            <TableCell sx={{ padding: "20px" }} align="right">
              Price
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sliderData.map((obj) => (
            <TableRow
              key={obj.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                "&:hover": {
                  backgroundColor: "#FAFBFF",
                },
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
  );
};

export default BTCRightTable;
