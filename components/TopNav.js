import Image from "next/image";
import { Container, Box, Text, Button } from "./shared/index";
import { useRouter } from "next/router";

export default function TopNav() {
  const history = useRouter();
  return (
    <Container py={4}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Image
          src={"/lizee.png"}
          width={80}
          height={40}
          style={{ cursor: "pointer" }}
          onClick={() => history.push("/")}
          alt="logo"
        />
        <Box flexDirection="row" alignItems="center">
          <Image src={"/icons/user.svg"} width={20} height={20} alt="user" />
          <Text ml={3} mr={7}>
            My account
          </Text>
          <Button>Sell my clothes</Button>
        </Box>
      </Box>
    </Container>
  );
}
