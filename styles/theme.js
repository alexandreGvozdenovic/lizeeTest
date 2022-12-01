export const colors = {
  gray: {
    main: "#D7D7D7",
    lighter: "#FBFBFB",
    darker: "rgba(34, 34, 34, 0.66)",
  },
  white: "#FFFFFF",
  pink: {
    main: "#E94D7E",
    lighter: "rgba(233, 77, 126, 0.8)",
  },
  green: {
    main: "#28D898",
    lighter: "#A6F2C4",
    pale: "#D7FCE5",
    dark: "#199266",
  },
  blue: "#2C3DD9",
  black: "#222222",
};
const breakpoints = {
  xs: "0",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1280px",
};

const theme = {
  colors,
  breakpoints,
  space: [0, 4, 8, 12, 16, 24, 32, 40, 48, 56, 80, 104, 128, 152],
  fontSizes: {
    xs: "0.75em",
    sm: "0.875em",
    md: "1em",
    lg: "1.125em",
    xl: "1.25em",
    xxl: "1.375em",
    xxxl: "1.875em",
  },
  fontWeights: [400, 500, 600],
};
export default theme;
