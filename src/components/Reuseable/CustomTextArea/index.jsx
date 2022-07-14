import React from "react";
import styled from "styled-components";

import { Box } from "@mui/material";

import { typography } from "../../../utils/typography";

const CustomTextArea = ({
  label,
  value,
  name,
  handleChange,
  disabled,
  required,
  errorData,
  rootStyles,
  inputStyles,
  otherProps,
}) => {
  return (
    <Box sx={{ width: "100%", ...rootStyles }}>
      {label && <Box sx={{ fontSize: typography.body1 }}>{label}</Box>}
      <Box
        component="textarea"
        value={value}
        id={name}
        onChange={handleChange}
        disabled={disabled}
        required={required}
        {...otherProps}
        sx={{
          marginTop: ".75rem",
          outline: "none",
          border: "1px solid #9b9b9b",
          borderRadius: "1rem",
          width: "100%",
          resize: "none",
          padding: "1rem",
          fontSize: "1.6rem",
          height: "20rem",
          ...inputStyles,
        }}
      />
      {errorData && errorData.touched[name] && errorData.errors[name] ? (
        <Error>{errorData.errors[name]}</Error>
      ) : (
        <Error></Error>
      )}
    </Box>
  );
};

const Error = styled.h6`
  font-size: ${typography.body1};
  color: #dd2121;
  font-weight: 600;
  padding: 5px 0;
  position: absolute;
`;

export default CustomTextArea;
