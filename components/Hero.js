import {
  Container,
  NextImage,
  Box,
  Header,
  Text,
  Separator,
} from "./shared/index";
import DateRangePicker from "./DateRangePicker";
export default function Hero() {
  return (
    <Container
      fluid
      display="flex"
      backgroundImage="url('bikegirl.png')"
      backgroundSize="cover"
      minHeight={600}
      alignItems="center"
    >
      <Container>
        <Box>
          <Header serif color="white" mb={4}>
            Reuse is the new cool
          </Header>
          <Text color="white" fontSize="lg" fontWeight={2}>
            Rent or buy a second-hand clothes for your next adventure.
          </Text>
          <DateRangePicker mt={5} />
        </Box>
      </Container>
    </Container>
  );
}
