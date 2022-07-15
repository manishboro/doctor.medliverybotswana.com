import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Box, Grid } from "@mui/material";

import FormWrapper from "components/Reuseable/FormWrapper";
import CustomTextField from "components/Reuseable/CustomTextField";
import CustomButton from "components/Reuseable/Button";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: { mobileNumber: "" },
    validationSchema: Yup.object().shape({
      mobileNumber: Yup.string().required("Please enter your mobile number"),
    }),
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <Box style={{ justifySelf: "center" }}>
      <FormWrapper
        heading="Create account request"
        rootStyles={{ width: "45rem" }}
      >
        <Grid container spacing={2} sx={{ marginTop: "2rem" }}>
          <Grid item xs={12}>
            <CustomTextField
              id="mobileNumber"
              label="Mobile Number"
              value={formik.values.mobileNumber}
              handleChange={formik.handleChange}
              handleblur={formik.handleBlur}
              errors={formik.errors.mobileNumber}
              touched={formik.touched.mobileNumber}
              customHelperText="We'll get back to you after we receive your request"
            />
          </Grid>

          <Grid item xs={12} sx={{ textAlign: "center", typography: "body1" }}>
            <Link to="/">I already have an account</Link>
          </Grid>

          <Grid item xs={12} sx={{ textAlign: "center", marginTop: "1rem" }}>
            <CustomButton
              type="submit"
              text="Create"
              onClick={formik.handleSubmit}
            />
          </Grid>
        </Grid>
      </FormWrapper>
    </Box>
  );
};

export default SignupForm;
