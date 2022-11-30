export const colors = {
  gray: {
    main: "#D7D7D7",
    lighter: "#FBFBFB",
    darker: "rgba(34, 34, 34, 0.66)",
  },
  white: "#FFFFFF",
  black: "#1D1D1D",
  pink: "#E94D7E",
  green: {
    main: "#28D898",
    lighter: "#A6F2C4",
    pale: "#D7FCE5",
    dark: "#199266",
  },
  blue: "#2C3DD9",
};
const sizes = {
  xs: "0.75em",
  sm: "1em",
  md: "1.5em",
  lg: "2em",
  xl: "3em",
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
  sizes,
  breakpoints,
  space: [0, 4, 8, 12, 16, 24, 32, 40, 48, 56, 80, 104, 128, 152],
  radii: {
    none: "0",
    xxs: "8px",
    xs: "16px",
    sm: "24px",
    md: "32px",
    lg: "40px",
    xl: "80px",
    full: "50%",
  },
  // texts: {
  //   caption2: {
  //     fontSize: '0.625em',
  //     lineHeight: '1.5',
  //     color: colors.gray.main,
  //   },
  //   notice2: {
  //     fontStyle: 'italic',
  //     fontSize: '18px',
  //     lineHeight: '27px',
  //   },
  //   caption: {
  //     fontSize: '0.75em',
  //     lineHeight: '1.5',
  //     color: colors.gray.main,
  //   },
  //   small: {
  //     fontSize: '0.875em',
  //     lineHeight: '1.5',
  //   },
  //   medium: {
  //     fontSize: '1em',
  //     lineHeight: '1.5',
  //   },
  //   large: {
  //     fontSize: '1.125em',
  //     lineHeight: '1.5',
  //   },
  // },
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
