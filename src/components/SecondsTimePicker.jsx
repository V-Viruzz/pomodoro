import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const theme = createTheme({
  LocalizationProvider: {
    // Name of the component
    LocalizationProvider: {
      styleOverrides: {
        // Name of the slot
        input: {
          // Some CSS
          fontSize: '5rem',
          color: 'white',
          backgroundColor: 'red',
        },
      },
    },
  },
});

function SecondsTimePicker({value, fnChange}) {

  return (
    
    <ThemeProvider theme={darkTheme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}>
          <TimePicker
            ampm={false}
            openTo="hours"
            views={["hours", "minutes", "seconds"]}
            inputFormat="HH:mm:ss"
            mask="__:__:__"
            label="Pomodoro"
            value={value}
            onChange={fnChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>
      </LocalizationProvider>
      </ThemeProvider>
  );
}

export default SecondsTimePicker;
