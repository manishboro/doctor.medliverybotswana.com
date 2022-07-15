import React from "react";

import { Box } from "@mui/material";

const FormWrapper = ({ heading, children, rootStyles }) => {
  return (
    <Box
      component="form"
      sx={{
        boxShadow: 3,
        width: "40rem",
        padding: "3rem 2rem",
        borderRadius: "1rem",

        "@media (max-width: 500px)": { width: "100% !important" },

        ...rootStyles,
      }}
    >
      <Box sx={{ textAlign: "center", typography: "h3"}}>
        {heading}
      </Box>

      {children}
    </Box>
  );
};

export default FormWrapper;
