import React from "react";
import styled from "styled-components";
import { space, layout } from "styled-system";
import { colors } from "../../styles/theme";

const StyledButton = styled("button")`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  background-color: ${colors.pink.main};
  color: white;
  font-family: "Noto Sans", sans-serif;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: ${({ icon }) => (!!icon ? "10px" : "24px")};
  padding-right: ${({ icon }) => (!!icon ? "10px" : "24px")};

  text-align: center;
  font-weight: 600;
  :hover {
    background-color: ${colors.pink.lighter};
  }

  ${space};
  ${layout};
`;
export default function Button({
  icon = false,
  onClick = () => {},
  children,
  ...props
}) {
  return (
    <StyledButton icon={icon} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
}
