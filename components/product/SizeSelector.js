import { Box, Text } from "../shared";
import styled from "styled-components";

const StyledSizeBox = styled(Box)`
  cursor: pointer;
`;
export default function SizeSelector({ sizes, currentSize, setCurrentSize }) {
  return (
    <Box>
      <Text fontSize="sm" color="gray.darker">
        Select your size:
      </Text>
      <Box flexDirection="row" mt={2}>
        {sizes.map((size, index) => {
          const isLast = index === sizes.length - 1;
          const isCurrentSize = size == currentSize;
          return (
            <StyledSizeBox
              key={size + index}
              width={40}
              height={32}
              borderRadius={4}
              border={isCurrentSize ? "2px solid" : "1px solid"}
              justifyContent="center"
              alignItems="center"
              px={4}
              py={2}
              mr={isLast ? 0 : 2}
              borderColor={isCurrentSize ? "pink.main" : "gray.main"}
              onClick={() => setCurrentSize(size)}
            >
              <Text>{size}</Text>
            </StyledSizeBox>
          );
        })}
      </Box>
    </Box>
  );
}
