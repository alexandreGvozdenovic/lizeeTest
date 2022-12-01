import React from "react";
import styled, { css } from "styled-components";
import { color, space, typography } from "styled-system";
import Text from "./Text";

const switchHeading = (n) => {
  switch (n) {
    default:
    case 1:
      return {
        size: 40,
        lineheight: 54,
      };
    case 2:
      return {
        size: 32,
        lineheight: 44,
      };
    case 3:
      return {
        size: 24,
        lineheight: 34,
      };
    case 4:
      return {
        size: 18,
        lineheight: 25,
      };
  }
};
const StyledHeading = styled(Text)`
  margin: 0px;
  font-family: ${({ serif }) =>
    serif ? "'Noto Serif', serif" : "'Noto Sans', sans-serif"};
  ${(p) => css`
    font-size: ${switchHeading(p.$level).size}px;
    line-height: ${switchHeading(p.$level).lineheight}px;
  `}
  ${color};
  ${space};
  ${typography};
`;

function Header({ as: htmlAs, level = 1, children, serif = false, ...props }) {
  return (
    <StyledHeading
      serif={serif}
      as={htmlAs || `h${level}`}
      $level={level}
      color="black"
      {...props}
    >
      {children}
    </StyledHeading>
  );
}

export default Header;
