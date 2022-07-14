import { Box } from "@mui/material";
import React from "react";

import DateAdapter from "@mui/lab/AdapterDateFns";
import { FormHelperText, TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";

export default function DateInput({
  label,
  disabled,
  name,
  value,
  errors,
  touched,
  errorMessage,
  handleFormikChange,
  datePickerProps,
  required = true,
  styles,
}) {
  return (
    <Box sx={{ ...styles }}>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <DesktopDatePicker
          label={label}
          inputFormat="dd/MM/yyyy"
          value={value}
          onChange={(e) => handleFormikChange(name, e)}
          disableOpenPicker={disabled}
          {...datePickerProps}
          renderInput={(params) => (
            <TextField
              {...params}
              disabled={true}
              required={required}
              sx={{
                width: "100%",

                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: errors && touched ? "red !important" : "rgba(0, 0, 0, 0.26)",
                },

                "& .MuiInputLabel-root": {
                  color: errors && touched ? "red" : "rgba(0, 0, 0, 0.38)",
                },
              }}
            />
          )}
        />
      </LocalizationProvider>

      {errors && touched && (
        <FormHelperText
          error
          sx={{ fontSize: "1.2rem", margin: "3px 14px 0 14px", "@media (max-width: 960px)": { width: "100%" } }}
        >
          {errorMessage ?? errors ?? "Please select a valid date"}
        </FormHelperText>
      )}
    </Box>
  );
}
