import { createTheme } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    htmlFontSize: 10,
    h1: { fontSize: "4.25rem" },
    h2: { fontSize: "3.25rem" },
    h3: { fontSize: "2.25rem" },
    h6: { fontSize: "6.5rem" },
    body1: { fontSize: "2rem" },
    body2: { fontSize: "1.8rem" },
    subtitle1: { fontSize: "1.6rem" },
    subtitle2: { fontSize: "1.4rem" },
    subtitle3: { fontSize: "1.2rem" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html {
          font-size: 62.5%;
        }
        
        @media only screen and (min-width: 1536px) {
          html {
            font-size: 65%;
          }
        }
        
        @media only screen and (max-width: 1030px) {
          html {
            font-size: 57%;
          }
        }
        
        @media only screen and (max-width: 600px) {
          html {
            font-size: 54%;
          }
        }
     `,
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthMd: { maxWidth: "130rem !important" },
        maxWidthLg: { maxWidth: "100% !important" },
      },
    },
  },
  palette: {
    custom: {
      blue_1: "#0075FC",
      blue_2: "#0078d4",
    },
  },
});

export default theme;
