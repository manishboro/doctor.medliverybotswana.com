import { Link } from "react-router-dom";

import { Box } from "@mui/material";

const Logo = ({ src, alt, rootStyles, isLink, link }) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "10rem",
        width: "10rem",

        ...rootStyles,

        "& img": { height: "100%", width: "100%", objectFit: "cover" },
      }}
    >
      {isLink && link ? (
        <Link to={link}>
          <Box style={{ cursor: "pointer" }}>
            <img
              src={src ?? "/assets/logos/Medlivery_Vertical.png"}
              alt={alt ?? "Medlivery"}
            />
          </Box>
        </Link>
      ) : (
        <img
          src={src ?? "/assets/logos/Medlivery_Vertical.png"}
          alt={alt ?? "Medlivery"}
        />
      )}
    </Box>
  );
};

export default Logo;
