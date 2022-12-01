import React from "react";
import styled from "styled-components";
import {
  space,
  layout,
  color,
  flexbox,
  position,
  border,
  grid,
} from "styled-system";

export const StyledBox = styled("div")`
  ${space};
  ${layout};
  ${color};
  ${flexbox};
  ${position};
  ${border};
  ${grid};
`;

const Box = ({ children, ...props }) => (
  <StyledBox
    display="flex"
    flexDirection="column"
    alignItems="stretch"
    {...props}
  >
    {children}
  </StyledBox>
);

export default Box;
