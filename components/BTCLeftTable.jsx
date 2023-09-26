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
import { GraphImgTable, RoundNotificationIcon, UpArrow } from "./Icons";
const BTCLeftTable = () => {
  return (
    <Box
      sx={{
        backgroundColor: "color.white",
        width: "75%",
        borderRadius: "10px 0 0 0px",
        border: "1px solid ",
        borderColor: "#DFE5F9",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography>BTC</Typography>
          <Typography
            sx={{
              color: "#999999",
            }}
          >
            /JPY
          </Typography>
        </Box>
        <Button
          sx={{
            color: "color.white",
            background:
              "linear-gradient(75deg, #0043FF 25.69%, #A370F1 105.3%)",
          }}
        >
          BUY
        </Button>
      </Box>
      <Box
        sx={{
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#FAFBFF",
          borderTop: "1px solid",
          borderBottom: "1px solid",
          borderColor: "#DFE5F9",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography>721,882</Typography>
          <Typography
            sx={{
              paddingLeft: "10px",
            }}
            color="color.red"
          >
            -4.66% <UpArrow color="red" rotate="180deg" />
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "0 10px",
            }}
          >
            <Typography
              sx={{
                color: "#999999",
              }}
            >
              High
            </Typography>
            <Typography
              sx={{
                paddingLeft: "10px",
              }}
            >
              725,974
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "0 10px",
            }}
          >
            <Typography
              sx={{
                color: "#999999",
              }}
            >
              High
            </Typography>
            <Typography
              sx={{
                paddingLeft: "10px",
              }}
            >
              725,974
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "0 10px",
            }}
          >
            <Typography
              sx={{
                color: "#999999",
              }}
            >
              High
            </Typography>
            <Typography
              sx={{
                paddingLeft: "10px",
              }}
            >
              725,974
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "0 10px",
          }}
        >
          <Typography
            sx={{
              color: "#999999",
              paddingRight: "10px",
            }}
          >
            Price Alert
          </Typography>
          <RoundNotificationIcon />
        </Box>
      </Box>
      <TableContainer
        component={Paper}
        sx={{ boxShadow: "none", width: "100%" }}
      >
        <Table size="small" aria-label="a dense table">
          <TableBody>
            <TableRow>
              <TableCell sx={{ padding: "12px 20px" }}>
                <GraphImgTable />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BTCLeftTable;
