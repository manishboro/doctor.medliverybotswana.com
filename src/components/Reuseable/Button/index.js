import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { MdOutlineDoubleArrow } from "react-icons/md";

import Spinner from "../Spinner";

export default function CustomButton({
  outlined,
  text,
  hrefInt,
  hrefExt,
  hrefExtProps,
  disabled,
  loading,
  showIcon = true,
  innerButtonStyles,
  ...otherProps
}) {
  const theme = useTheme()

  return (
    <Button  {...otherProps} bgcolor={theme.palette.custom.blue_2} outlined={outlined} disabled={disabled || loading}>
      {!loading ? (
        hrefInt ? (
          <Link
            to={hrefInt}
            style={{
              height: "3.75rem",
              minWidth: "13rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              color: disabled ? "white" : outlined ? theme.custom.palette.blue_2 : "white",
              position: "relative",
              padding: ".5rem 1rem",
              ...innerButtonStyles,
            }}
          >
            {text}
            {showIcon && (
              <span>
                <MdOutlineDoubleArrow />
              </span>
            )}
          </Link>
        ) : hrefExt && !disabled ? (
          <Box
            component="a"
            href={hrefExt}
            {...hrefExtProps}
            sx={{
              height: "3.75rem",
              minWidth: "13rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              color: disabled ? "white" : outlined ? theme.custom.palette.blue_2 : "white",
              position: "relative",
              padding: ".5rem 1rem",
              ...innerButtonStyles,
            }}
          >
            {text}
            {showIcon && (
              <span>
                <MdOutlineDoubleArrow />
              </span>
            )}
          </Box>
        ) : (
          <Box
            sx={{
              height: "3.75rem",
              minWidth: "13rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: disabled ? "white" : outlined ? theme.custom.palette.blue_2 : "white",
              position: "relative",
              padding: ".5rem 1rem",
              ...innerButtonStyles,
            }}
          >
            {text}{" "}
            {showIcon && (
              <span>
                <MdOutlineDoubleArrow />
              </span>
            )}
          </Box>
        )
      ) : (
        <Spinner size="30" color="white" />
      )}
    </Button>
  );
}

const Button = styled.button`
  border: ${(props) => (props.disabled ? "none" : props.outlined ? `1px solid ${props.bgcolor}` : "none")};
  outline: none;
  flex-shrink: 0;
  font-size: 1.6rem;
  font-weight: 500;
  border-radius: 5px;
  transition: 0.2s ease-out;
  background-color: ${(props) => (props.disabled ? "#C5C5C5" : props.outlined ? "transparent" : props.bgcolor)};
  cursor: pointer;
  height: 3.75rem;
  min-width: 14rem;
  position: relative;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#C5C5C5" : props.outlined ? "transparent" : props.bgcolor)};
  }

  span {
    display: grid;
    place-items: center;
    margin-left: 1rem;
  }
`;
