import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab, Typography } from "@mui/material";
import React from "react";
import { Triangle } from "./Icons";
import LatestActivityTable from "./LatestActivityTable";
const tabData = [
  {
    name: "ALL",
    id: 1,
    desc: <LatestActivityTable />,
  },
  {
    name: "BTC",
    id: 2,
    desc: "BTC detals",
  },
  {
    name: "ETH",
    id: 3,
    desc: "ETH detals",
  },
  {
    name: "XRP",
    id: 4,
    desc: "XRP detals",
  },
  {
    name: "XEM",
    id: 5,
    desc: "XEM detals",
  },
  {
    name: "LSK",
    id: 6,
    desc: "LSK detals",
  },
  {
    name: "BTH",
    id: 7,
    desc: "BTH detals",
  },
  {
    name: "FCT",
    id: 8,
    desc: "FCT detals",
  },
  {
    name: "ETC",
    id: 9,
    desc: "ETC detals",
  },
  {
    name: "JPY",
    id: 10,
    desc: "JPY detals",
  },
];
const LatestActivity = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("2018/10/02 10:57:46", "Deposit Japanese Yen", "+10,000 JPY"),
    createData("2018/10/10 10:57:46", "Bought Bitcoin", "+ 0.00018147 BTC"),
    createData("2018/10/10 10:57:46", "Service fee", "- 500 JPY"),
  ];
  const [value, setValue] = React.useState(1);
  const [updatedText, setUpdatedText] = React.useState(tabData[0]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ padding: "32px", width: "100%" }}>
      <Box
        sx={{
          backgroundColor: "color.white",
          minWidth: "310px",
          borderRadius: "10px 10px",
          border: "1px solid ",
          borderColor: "#DFE5F9",
          overflow: "hidden",
        }}
      >
        {/*========================== TITLE ============================*/}

        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "baseline",
              padding: "24px 20px",
            }}
          >
            <Triangle color="url(#paint0_linear_0_776)" />
            <Typography
              sx={{
                paddingLeft: "10px",
                fontWeight: "700",
              }}
            >
              Latest Activities
            </Typography>
          </Box>
        </Box>

        {/*========================== LATEST ACTIVITY TABS ============================*/}
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                width: "calc(50vw - 200px)",
                overflow: "auto",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                sx={{
                  paddingBottom: "15px",
                  minHeight: "0px",
                  minWidth: "600px",
                }}
              >
                {tabData.map((item, index) => {
                  return (
                    <Tab
                      sx={{
                        padding: "0 0 5px 0",
                        minWidth: "0px",
                        minHeight: "0px",
                        margin: " 0 20px",
                        minWidth: "0px",
                      }}
                      onClick={() => setUpdatedText(item)}
                      key={index}
                      label={item.name}
                      value={item.id}
                    />
                  );
                })}
              </TabList>
            </Box>
            <TabPanel
              sx={{
                padding: { defaultSize: updatedText.id === 1 ? 0 : "20px" },
              }}
              value={updatedText.id}
            >
              <Box>{updatedText.desc}</Box>
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Box>
  );
};

export default LatestActivity;
