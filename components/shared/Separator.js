import React from "react";
import styled from "styled-components";
import { color, space, layout } from "styled-system";
import { colors } from "../../styles/theme";

const StyledSeparatorH = styled.div`
  width: 100%;
  border: none;
  background-color: ${colors.gray.main};
  height: 2px;
  ${color}
  ${space}
  ${layout}
`;

const StyledSeparatorV = styled.div`
  background-color: ${colors.gray.main};
  width: 2px;
  ${color}
  ${space}
  ${layout}
`;

export default function Separator({ axe = "horizontal", ...props }) {
  return (
    <>
      {axe === "horizontal" ? (
        <StyledSeparatorH {...props} />
      ) : (
        <StyledSeparatorV {...props} />
      )}
    </>
  );
}
