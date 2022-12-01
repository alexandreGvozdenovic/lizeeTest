import React from "react";
import styled from "styled-components";
import {
  space,
  color,
  layout,
  flexbox,
  background,
  position,
} from "styled-system";
// padding-left: ${(p) => (p.fluid ? "0px" : "110px")};
// padding-right: ${(p) => (p.fluid ? "0px" : "110px")};
const StyledContainer = styled("div")`
  ${space};
  ${color};
  ${layout};
  ${flexbox};
  ${background};
  ${position};
`;

export default function Container({ fluid = false, children, ...props }) {
  return (
    <StyledContainer
      px={{ xs: 4, lg: fluid ? 0 : 110 }}
      fluid={fluid}
      {...props}
    >
      {children}
    </StyledContainer>
  );
}
