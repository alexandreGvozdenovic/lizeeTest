import React from "react";
import styled from "styled-components";
import { space, color, typography } from "styled-system";

const StyledText = styled("p")`
  margin: 0px;
  ${space};
  ${color};
  ${typography};
`;

export default function Text({ ...props }) {
  return <StyledText fontSize="md" {...props} />;
}
