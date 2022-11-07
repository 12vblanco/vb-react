// web to convert pixels to rem
// https://www.ninjaunits.com/converters/pixels/pixels-rem/

//${(props) => props.theme.colours.bbqBlack}

const spacing = {
  tiny: "0.25rem", // '4px',
  xxs: "0.5rem", // '8px',
  xs: "0.75rem", // '12px',
  sm: "1rem", // '16px',
  md: "1.25rem", // '20px',
  lg: "2rem", // '32px',
  xl: "2.5rem", // '40px',
  xxl: "3.75rem", // '60px',
  mega: "6.25rem", // '100px',
};

const colours = {
  colorBg: "#f4f7f8",
  colorWhite: "#ffffff",
  colorDark: "#333333",
  colorCream: "#e2ebee",
  colorRed: "#a52a2a",
};

const breakpoints = {
  xs: 360,
  sm: 470,
  md: 769,
  lg: 1023,
  xl: 1290,
};

const device = (size) => (style) =>
  `@media (min-width: ${breakpoints[size]}px){ ${style} }`;

export const theme = {
  colours,
  spacing,
  breakpoints,
  device,
};
