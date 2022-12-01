import { Box, Text } from "./shared/index";
import moment from "moment/moment";
import styled from "styled-components";

const StyledAbsoluteBox = styled(Box)`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-top: 48px;
  padding-bottom: 48px;
`;
export default function Footer() {
  return (
    <StyledAbsoluteBox bg="blue" justifyContent="center" alignItems="center">
      <Box flexDirection="row" mb={5}>
        <Text fontSize="xs" mr={6} color="white">
          Help
        </Text>
        <Text fontSize="xs" mr={6} color="white">
          Contact
        </Text>
        <Text fontSize="xs" mr={6} color="white">
          Privacy
        </Text>
        <Text fontSize="xs" color="white">
          Terms & Conditions
        </Text>
      </Box>
      <Box flexDirection="row">
        <Text fontSize="xs" color="white">
          Alexandre Gvozdenovic - {moment().format("YYYY")}
        </Text>
      </Box>
    </StyledAbsoluteBox>
  );
}
