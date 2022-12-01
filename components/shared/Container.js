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

const StyledContainer = styled("div")`
  padding-left: ${(p) => (p.fluid ? "0px" : "110px")};
  padding-right: ${(p) => (p.fluid ? "0px" : "110px")};
  ${space};
  ${color};
  ${layout};
  ${flexbox};
  ${background};
  ${position};
`;

export default function Container({ fluid = false, children, ...props }) {
  return (
    <StyledContainer fluid={fluid} {...props}>
      {children}
    </StyledContainer>
  );
}
