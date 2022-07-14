import { Skeleton, TextField } from "@mui/material";

const CustomTextField = ({
  id,
  type = "text",
  label,
  value,
  handleChange,
  handleblur,
  customHelperText = "",
  errors,
  touched,
  required = true,
  disabled = false,
  customRef,
  style = {},
  otherProps,
}) => {
  return false ? (
    <Skeleton variant="text" />
  ) : (
    <TextField
      id={id}
      variant="outlined"
      type={type}
      value={value}
      label={label}
      error={errors && touched ? true : false}
      helperText={errors && touched ? errors : customHelperText}
      onChange={handleChange}
      onBlur={handleblur}
      required={required}
      // InputLabelProps={{ sx: { fontSize: "1.6rem" } }}
      inputProps={{ ref: customRef /*sx: { height: "2rem" }*/ }}
      disabled={disabled}
      {...otherProps}
      sx={{
        width: "100% !important",
        fontFamily: "Montserrat !important",
        backfaceVisibility: "hidden",
        fontSize: "1.6rem",
        ...style,
      }}
    />
  );
};

export default CustomTextField;
