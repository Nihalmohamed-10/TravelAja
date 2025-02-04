import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function BasicDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Basic date picker"
        slots={{ openPickerIcon: () => null }} 
        sx={{
          "& .MuiOutlinedInput-root": {
            border: "none", 
            "& fieldset": { border: "none" }, 
          },
          "& .MuiInputAdornment-root": {
            display: "none",
          },
          "& .MuiInputLabel-root": {
            color: "black", 
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "black", 
          },
        }}
      />
    </LocalizationProvider>
  );
}

