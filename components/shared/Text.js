import React from "react";
import styled from "styled-components";
import { space, color, typography } from "styled-system";

const StyledText = styled("p")`
  margin: 0px;
  font-family: ${({ serif }) =>
    serif ? "'Noto Serif', serif" : "'Noto Sans', sans-serif"};
  ${space};
  ${color};
  ${typography};
`;

export default function Text({ serif = false, ...props }) {
  return <StyledText serif={serif} fontSize="md" color="black" {...props} />;
}
