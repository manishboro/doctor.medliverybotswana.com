import React from "react";
import { nanoid } from "nanoid";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

export default function CustomRadioButtons({
  heading,
  name,
  value,
  handleChange,
  radioOptions,
  errors,
  touched,
  disabled,
}) {
  let errorBool = errors && touched;

  return (
    <FormControl component="fieldset" sx={{ width: "100%" }}>
      <FormLabel component="legend" sx={{ typography: "subtitle2", color: errorBool ? "red" : "#636363" }}>
        {heading}
      </FormLabel>

      <RadioGroup
        row
        aria-label={name}
        name={name}
        value={value}
        onChange={handleChange}
        sx={{
          width: "100%",
          flexWrap: "wrap",
          marginTop: "1rem",
          marginLeft: "1rem",

          "& svg": { fontSize: "2.5rem" },
        }}
      >
        {radioOptions.map((el) => (
          <FormControlLabel
            key={nanoid()}
            value={el.value}
            label={el.label}
            control={<Radio color="primary" disabled={disabled} />}
            sx={{ fontSize: "1.6rem", color: errorBool ? "red" : "#636363" }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
