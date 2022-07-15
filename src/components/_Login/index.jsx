import React from "react";

import { Box } from "@mui/material";

import LoginForm from "./LoginForm";
import DoctorSignupSvg from "components/Reuseable/Svgs/DoctorSignupSvg";

const DoctorLogin = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr",
        alignItems: "center",
        gap: "4rem",
        padding: "2rem",
        "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
      }}
    >
      <Box
        sx={{
          justifySelf: "center",
          "@media (max-width: 960px)": { display: "none" },
        }}
      >
        <Box sx={{ typography: "h2", marginTop: "1rem" }}>
          <Box component="span" sx={{ color: "custom.blue_1" }}>
            Connect
          </Box>{" "}
          with your{" "}
          <Box component="span" sx={{ color: "custom.blue_1" }}>
            Patients
          </Box>
        </Box>

        <Box sx={{ typography: "body1", marginTop: "1rem" }}>
          <Box>Consult online, Give prescriptions, Manage records,</Box>
          <Box>Get paid directly and much more</Box>
        </Box>

        <Box style={{ marginTop: "4rem" }}>
          <DoctorSignupSvg />
        </Box>
      </Box>

      <LoginForm />
    </Box>
  );
};

export default DoctorLogin;
