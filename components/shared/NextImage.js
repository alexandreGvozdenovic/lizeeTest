import Box from "./Box";
import Image from "next/image";
import styled from "styled-components";

const StyledImageWrapper = styled(Box)`
  position: relative;
  width: 100%;
`;
const StyledImage = styled(Image)`
  object-fit: ${({ $objectFit }) => $objectFit};
  width: 100% !important;
  position: relative !important;
`;

export default function NextImage({
  src,
  objectFit = "contain",
  sizes = "width: 100px, height: 100px",
  ...props
}) {
  return (
    <StyledImageWrapper {...props}>
      <StyledImage
        src={src}
        fill
        $objectFit={objectFit}
        sizes={sizes}
        alt="img"
      />
    </StyledImageWrapper>
  );
}
