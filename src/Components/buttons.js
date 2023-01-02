import {
  Button,
  createTheme,
  styled,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../App.css";

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #ef5350 30%, #FF8E53 90%)",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  paddingLeft: 30,
  paddingRight: 30,
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#2f60b2",
    },
    secondary: {
      main: "#e91e63",
    },
    error: {
      main: "#357f78",
    },
    info: {
      main: "#eb6e47",
    },
    success: {
      main: "#2e7d32",
    },
  },
});

function Buttons() {
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={20} direction="row" justifyContent="center">
        {/* first col */}
        <Stack spacing={4}>
          <Typography color="GrayText" fontSize="20px">
            Forbes Advisor
          </Typography>

          <Stack>
            <Typography color="GrayText">Default State</Typography>
            <Button color="primary" variant="contained">
              <Typography
                marginTop={1}
                marginBottom={1}
                marginLeft={4.5}
                marginRight={4.5}
                fontSize="15px"
              >
                Primary Button
              </Typography>
            </Button>
          </Stack>

          <Stack>
            <Typography color="GrayText">Hover State</Typography>
            <Button color="primary" variant="contained" disableRipple>
              <Typography
                marginTop={1}
                marginBottom={1}
                marginLeft={2}
                marginRight={2}
                fontSize="15px"
              >
                Primary Button
              </Typography>
              <LockOutlinedIcon sx={{ mr: 2 }}></LockOutlinedIcon>
            </Button>
          </Stack>

          <Stack>
            <Typography color="GrayText">Disable State</Typography>
            <Button disabled variant="contained">
              <Typography
                marginTop={1}
                marginBottom={1}
                marginLeft={2}
                marginRight={2}
                fontSize="15px"
              >
                Primary Button
              </Typography>
              <LockOutlinedIcon sx={{ mr: 2 }}></LockOutlinedIcon>
            </Button>
          </Stack>
        </Stack>
        {/* first col end */}

        {/* second col */}
        <Stack spacing={4}>
          <Typography color="GrayText" fontSize="20px">
            Forbes Health
          </Typography>

          <Stack>
            <Typography color="GrayText">Default State</Typography>
            <Button color="error" variant="contained">
              <Typography
                marginTop={1}
                marginBottom={1}
                marginLeft={4.5}
                marginRight={4.5}
                fontSize="15px"
              >
                Primary Button
              </Typography>
            </Button>
          </Stack>

          <Stack>
            <Typography color="GrayText">Hover State</Typography>
            <Button color="error" variant="contained" disableRipple>
              <Typography
                marginTop={1}
                marginBottom={1}
                marginLeft={2}
                marginRight={2}
                fontSize="15px"
              >
                Primary Button
              </Typography>
              <LockOutlinedIcon sx={{ mr: 2 }}></LockOutlinedIcon>
            </Button>
          </Stack>

          <Stack>
            <Typography color="GrayText">Disable State</Typography>
            <Button variant="contained" disabled>
              <Typography
                marginTop={1}
                marginBottom={1}
                marginLeft={2}
                marginRight={2}
                fontSize="15px"
              >
                Primary Button
              </Typography>
              <LockOutlinedIcon sx={{ mr: 2 }}></LockOutlinedIcon>
            </Button>
          </Stack>
        </Stack>
        {/* second col end*/}
      </Stack>

      <Stack spacing={20} margin={5} direction="row" justifyContent="center">
        {/* 3rd col */}
        <Stack spacing={4}>
          <Typography color="GrayText" fontSize="20px">
            Forbes Home
          </Typography>

          <Stack>
            <Typography color="GrayText">Default State</Typography>

            <Button color="info" variant="contained">
              <Typography
                marginTop={1}
                marginBottom={1}
                marginLeft={4.5}
                marginRight={4.5}
                fontSize="15px"
              >
                Primary Button
              </Typography>
            </Button>
          </Stack>

          <Stack>
            <Typography color="GrayText">Hover State</Typography>
            <Button color="info" variant="contained" disableRipple>
              <Typography
                marginTop={1}
                marginBottom={1}
                marginLeft={2}
                marginRight={2}
                fontSize="15px"
              >
                Primary Button
              </Typography>
              <LockOutlinedIcon sx={{ mr: 2 }}></LockOutlinedIcon>
            </Button>
          </Stack>

          <Stack>
            <Typography color="GrayText">Disable State</Typography>
            <Button disabled variant="contained">
              <Typography
                marginTop={1}
                marginBottom={1}
                marginLeft={2}
                marginRight={2}
                fontSize="15px"
              >
                Primary Button
              </Typography>
              <LockOutlinedIcon sx={{ mr: 2 }}></LockOutlinedIcon>
            </Button>
          </Stack>
        </Stack>
        {/* 3rd col end */}

        {/* 4th col */}
        <Stack spacing={4}>
          <Typography color="GrayText" fontSize="20px">
            Forbes Wheels
          </Typography>

          <Stack>
            <Typography color="GrayText">Default State</Typography>
            <MyButton>
              <Typography
                marginTop={1}
                marginBottom={1}
                marginLeft={3}
                marginRight={3}
                fontSize="15px"
              >
                Primary Button
              </Typography>
            </MyButton>
          </Stack>

          <Stack>
            <Typography color="GrayText">Hover State</Typography>
            <MyButton disableRipple>
              <Typography>Primary Button</Typography>
              <LockOutlinedIcon sx={{ padding: 1 }}></LockOutlinedIcon>
            </MyButton>
          </Stack>

          <Stack>
            <Typography color="GrayText">Disable State</Typography>
            <Button variant="contained" disabled>
              <Typography
                marginTop={1}
                marginBottom={1}
                marginLeft={2}
                marginRight={2}
                fontSize="15px"
              >
                Primary Button
              </Typography>
              <LockOutlinedIcon sx={{ mr: 2 }}></LockOutlinedIcon>
            </Button>
          </Stack>
        </Stack>
        {/* 4th col end*/}
      </Stack>

      {/* secondary button start */}
      <Stack
        direction="row"
        justifyContent="center"
        spacing={20}
        marginRight={20}
        paddingRight={30}
      >
        <Stack>
          <Typography color="GrayText" fontSize="20px" paddingBottom={2}>
            Secondary Button
          </Typography>
          <Button variant="outlined">
            <ArrowBackIcon />
            <Typography
              marginTop={1}
              marginBottom={1}
              marginLeft={2}
              marginRight={2}
              fontSize="15px"
              color="black"
            >
              Secondary Button
            </Typography>
          </Button>
        </Stack>
      </Stack>
      {/* secondary button end */}
    </ThemeProvider>
  );
}

export default Buttons;
